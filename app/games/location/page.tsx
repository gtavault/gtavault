"use client";
import { locationAnswers } from "@/lib/location-answers";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

type SavedLocation = {
  id: number;
  x: number;
  y: number;
};

type Location = {
  id: number;
  image: string;
  gta: {
    x: number;
    y: number;
  };
  answer: {
    x: number;
    y: number;
  };
};

const MAP_WIDTH = 5944;
const MAP_HEIGHT = 8075;



function gtaToPixel(x: number, y: number) {
  return {
    x: x * 0.677176 + 2520.94,
    y: y * -0.655319 + 5427.35,
  };
}

function gtaToPercent(x: number, y: number) {
  const pixel = gtaToPixel(x, y);

  return {
    x: (pixel.x / MAP_WIDTH) * 100,
    y: (pixel.y / MAP_HEIGHT) * 100,
  };
}


function loadSavedLocations(): Location[] {
  return locationAnswers.map((location) => ({
    id: location.id,
    image: `/games/location${location.id}.jpg`,
    gta: {
      x: location.x,
      y: location.y,
    },
    answer: gtaToPercent(location.x, location.y),
  }));
}


function shuffleLocations(locations: Location[]) {
  return [...locations].sort(
    () => Math.random() - 0.5
  );
}

export default function LocationGame() {
  const [pin, setPin] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [zoom, setZoom] = useState(1);

  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  const [submitted, setSubmitted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const [availableLocations, setAvailableLocations] =
    useState<Location[]>([]);

  const [gameLocations, setGameLocations] =
    useState<Location[]>([]);

  const [roundScores, setRoundScores] =
    useState<number[]>([]);

  const [roundScore, setRoundScore] =
    useState<number | null>(null);

  const [distance, setDistance] =
    useState<number | null>(null);

  const [loading, setLoading] = useState(true);

  const currentLocation = gameLocations[round - 1];

  const mapRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const dragging = useRef(false);
  const moved = useRef(false);

  const lastPointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const savedLocations = loadSavedLocations();

    setAvailableLocations(savedLocations);
    setLoading(false);
  }, []);

  function startGame() {
    const locations = loadSavedLocations();

    setAvailableLocations(locations);

    setGameLocations(
      shuffleLocations(locations).slice(0, 5)
    );

    setRound(1);
    setScore(0);
    setRoundScores([]);
    setPin(null);
    setRoundScore(null);
    setDistance(null);
    setSubmitted(false);
    setGameOver(false);
    setGameStarted(true);

    resetMap();
  }

  function clampOffset(
    x: number,
    y: number,
    scale: number
  ) {
    const map = mapRef.current;
    const viewport = viewportRef.current;

    if (!map || !viewport) {
      return {
        x: 0,
        y: 0,
      };
    }

    const width = map.offsetWidth;
    const height = map.offsetHeight;

    const viewWidth = viewport.clientWidth;
    const viewHeight = viewport.clientHeight;

    const maxX = Math.max(
      0,
      (width * scale - viewWidth) / 2
    );

    const maxY = Math.max(
      0,
      (height * scale - viewHeight) / 2
    );

    return {
      x: Math.max(
        -maxX,
        Math.min(maxX, x)
      ),
      y: Math.max(
        -maxY,
        Math.min(maxY, y)
      ),
    };
  }

  function changeZoom(amount: number) {
    const nextZoom = Math.min(
      4,
      Math.max(1, zoom + amount)
    );

    setZoom(nextZoom);

    setOffset(
      clampOffset(
        offset.x,
        offset.y,
        nextZoom
      )
    );
  }

  function startDrag(
    e: PointerEvent<HTMLDivElement>
  ) {
    if (
      e.button !== 0 ||
      gameOver
    ) {
      return;
    }

    dragging.current = true;
    moved.current = false;

    lastPointer.current = {
      x: e.clientX,
      y: e.clientY,
    };

    e.currentTarget.setPointerCapture(
      e.pointerId
    );
  }

  function drag(
    e: PointerEvent<HTMLDivElement>
  ) {
    if (!dragging.current) {
      return;
    }

    const dx =
      e.clientX -
      lastPointer.current.x;

    const dy =
      e.clientY -
      lastPointer.current.y;

    if (
      Math.abs(dx) +
        Math.abs(dy) >
      2
    ) {
      moved.current = true;
    }

    lastPointer.current = {
      x: e.clientX,
      y: e.clientY,
    };

    if (zoom > 1) {
      setOffset((current) =>
        clampOffset(
          current.x + dx,
          current.y + dy,
          zoom
        )
      );
    }
  }

  function endDrag(
    e: PointerEvent<HTMLDivElement>
  ) {
    if (!dragging.current) {
      return;
    }

    if (
      !moved.current &&
      !submitted &&
      !gameOver &&
      mapRef.current
    ) {
      const map = mapRef.current;
      const rect =
        map.getBoundingClientRect();

      const x =
        ((e.clientX - rect.left) /
          rect.width) *
        100;

      const y =
        ((e.clientY - rect.top) /
          rect.height) *
        100;

      if (
        x >= 0 &&
        x <= 100 &&
        y >= 0 &&
        y <= 100
      ) {
        setPin({
          x,
          y,
        });
      }
    }

    dragging.current = false;
  }

  function clearPin() {
    if (!submitted) {
      setPin(null);
    }
  }

  function resetMap() {
    setZoom(1);

    setOffset({
      x: 0,
      y: 0,
    });

    if (viewportRef.current) {
      viewportRef.current.scrollTop = 0;
      viewportRef.current.scrollLeft = 0;
    }
  }

  function submitGuess() {
    if (
      !pin ||
      submitted ||
      gameOver ||
      !currentLocation
    ) {
      return;
    }

    const pinPixelX =
      (pin.x / 100) *
      MAP_WIDTH;

    const pinPixelY =
      (pin.y / 100) *
      MAP_HEIGHT;

    const guessedGtaX =
      (pinPixelX - 2520.94) /
      0.677176;

    const guessedGtaY =
      (pinPixelY - 5427.35) /
      -0.655319;

    const dx =
      guessedGtaX -
      currentLocation.gta.x;

    const dy =
      guessedGtaY -
      currentLocation.gta.y;

    const actualDistance =
      Math.sqrt(
        dx * dx +
          dy * dy
      );

    const roundedDistance =
      Math.round(actualDistance);

    setDistance(
      roundedDistance
    );

    const points = Math.round(
      5000 *
        Math.max(
          0,
          1 -
            actualDistance /
              5000
        )
    );

    setRoundScore(points);

    setRoundScores(
      (current) => {
        const updated = [
          ...current,
        ];

        updated[
          round - 1
        ] = points;

        return updated;
      }
    );

    setScore(
      (current) =>
        current + points
    );

    setSubmitted(true);
  }

  function nextRound() {
    if (round >= 5) {
      setGameOver(true);
      return;
    }

    setRound(
      (current) =>
        current + 1
    );

    setPin(null);
    setRoundScore(null);
    setDistance(null);
    setSubmitted(false);

    resetMap();
  }

  function restartGame() {
    const locations =
      loadSavedLocations();

    setAvailableLocations(
      locations
    );

    setGameLocations(
      shuffleLocations(
        locations
      ).slice(0, 5)
    );

    setRound(1);
    setScore(0);
    setRoundScores([]);
    setPin(null);
    setRoundScore(null);
    setDistance(null);
    setSubmitted(false);
    setGameOver(false);
    setGameStarted(true);

    resetMap();
  }

  if (loading) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-[#050507] text-white">
        <p className="text-sm text-white/40">
          Loading game...
        </p>
      </main>
    );
  }

  /*
   * START SCREEN
   */
  if (!gameStarted) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-[#050507] text-white">

        {/* GTA VAULT ATMOSPHERE */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(236,72,153,0.12),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.08),transparent_32%)]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/[0.04] blur-[160px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex min-h-screen flex-col px-5 py-5 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">

          <nav className="flex items-center justify-between border-b border-white/10 pb-5">

            <a
              href="/games"
              className="group text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
            >
              <span className="mr-2 inline-block transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to Games
            </a>

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                GTA Vault Arcade
              </span>

            </div>

          </nav>

          {/* MOBILE */}

          <div className="flex flex-1 items-center justify-center lg:hidden">

            <div className="w-full text-center">

              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-400/30 bg-pink-500/10 shadow-[0_0_50px_rgba(236,72,153,0.18)]">

                <svg
                  width="34"
                  height="40"
                  viewBox="0 0 36 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 42C15.5 36 3 23 3 16C3 7.72 9.72 1 18 1C26.28 1 33 7.72 33 16C33 23 20.5 36 18 42Z"
                    fill="#ec4899"
                    stroke="#fbcfe8"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="18"
                    cy="16"
                    r="5"
                    fill="white"
                  />
                </svg>

              </div>

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-pink-400">
                GTA Vault Arcade
              </p>

              <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">

                Guess the

                <span className="block bg-gradient-to-r from-pink-400 via-white to-cyan-300 bg-clip-text text-transparent">
                  Location
                </span>

              </h1>

              <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/45">
                Test your knowledge of Los Santos
                and Blaine County. Study the image,
                place your pin and get as close as
                possible to the real location.
              </p>

              <div className="mx-auto mt-10 grid max-w-md grid-cols-2 divide-x divide-white/10 border border-white/10 bg-white/[0.025]">

                <div className="px-4 py-5">

                  <p className="text-2xl font-black text-white">
                    05
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/30">
                    Rounds
                  </p>

                </div>

                <div className="px-4 py-5">

                  <p className="text-2xl font-black text-pink-400">
                    25K
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/30">
                    Max score
                  </p>

                </div>

              </div>

              {availableLocations.length < 5 && (
                <p className="mt-5 text-sm text-red-400">
                  Not enough locations available.
                  At least 5 are required to play.
                </p>
              )}

              <button
                onClick={startGame}
                disabled={
                  availableLocations.length < 5
                }
                className="group mt-8 inline-flex min-w-[240px] items-center justify-center gap-3 bg-pink-500 px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_0_35px_rgba(236,72,153,0.2)] transition hover:scale-[1.02] hover:bg-pink-400 hover:shadow-[0_0_50px_rgba(236,72,153,0.35)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Start game

                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>

              </button>

              <p className="mt-5 text-xs text-white/20">
                5 random locations selected every game
              </p>

            </div>

          </div>

          {/* DESKTOP */}

          <div className="hidden flex-1 items-center py-10 lg:flex lg:py-16">

            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24 2xl:gap-32">

              <section className="text-left">

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-400/30 bg-pink-500/10 shadow-[0_0_60px_rgba(236,72,153,0.18)]">

                  <svg
                    width="34"
                    height="40"
                    viewBox="0 0 36 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 42C15.5 36 3 23 3 16C3 7.72 9.72 1 18 1C26.28 1 33 7.72 33 16C33 23 20.5 36 18 42Z"
                      fill="#ec4899"
                      stroke="#fbcfe8"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="18"
                      cy="16"
                      r="5"
                      fill="white"
                    />
                  </svg>

                </div>

                <p className="text-xs font-bold uppercase tracking-[0.4em] text-pink-400">
                  GTA Vault Arcade
                </p>

                <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight lg:text-7xl xl:text-8xl">

                  Guess the

                  <span className="block bg-gradient-to-r from-pink-400 via-white to-cyan-300 bg-clip-text text-transparent">
                    Location
                  </span>

                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg lg:text-xl lg:leading-8">
                  Think you know Los Santos and
                  Blaine County? Study the image,
                  find the location and place your
                  pin as close to the real spot as
                  possible.
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <div className="h-px w-12 bg-pink-500" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/25">
                    Test your knowledge
                  </span>

                </div>

              </section>

              <section className="w-full lg:max-w-xl lg:justify-self-end">

                <div className="border border-white/10 bg-[#09090d]/90 p-6 shadow-[0_25px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8 lg:p-10">

                  <div className="mb-7 flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-400">
                        Game briefing
                      </p>

                      <p className="mt-2 text-lg font-bold text-white">
                        Ready to play?
                      </p>

                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400">
                      →
                    </div>

                  </div>

                  <div className="grid grid-cols-2 border border-white/10 bg-white/[0.02]">

                    <div className="border-r border-white/10 px-3 py-5 text-center sm:px-4">

                      <p className="text-2xl font-black text-white">
                        05
                      </p>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
                        Rounds
                      </p>

                    </div>

                    <div className="px-3 py-5 text-center sm:px-4">

                      <p className="text-2xl font-black text-pink-400">
                        25K
                      </p>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
                        Max score
                      </p>

                    </div>

                  </div>

                  <div className="mt-7 space-y-4">

                    <div className="flex items-center gap-4">

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-xs font-black text-pink-400">
                        01
                      </span>

                      <p className="text-sm text-white/45">
                        Study the location image carefully.
                      </p>

                    </div>

                    <div className="flex items-center gap-4">

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-xs font-black text-pink-400">
                        02
                      </span>

                      <p className="text-sm text-white/45">
                        Place your pin anywhere on the map.
                      </p>

                    </div>

                    <div className="flex items-center gap-4">

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-xs font-black text-pink-400">
                        03
                      </span>

                      <p className="text-sm text-white/45">
                        Get closer to earn more points.
                      </p>

                    </div>

                  </div>

                  {availableLocations.length < 5 ? (

                    <div className="mt-8 border border-red-500/20 bg-red-500/5 p-4 text-center">

                      <p className="text-sm font-semibold text-red-400">
                        Not enough locations available.
                      </p>

                      <p className="mt-1 text-xs text-white/25">
                        At least 5 locations are required
                        to play.
                      </p>

                    </div>

                  ) : (

                    <>

                      <button
                        onClick={startGame}
                        className="group mt-8 flex min-h-14 w-full items-center justify-center gap-3 bg-pink-500 px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_35px_rgba(236,72,153,0.18)] transition duration-300 hover:scale-[1.01] hover:bg-pink-400 hover:shadow-[0_0_55px_rgba(236,72,153,0.35)]"
                      >
                        Start game

                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>

                      </button>

                      <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/20">
                        5 random locations selected each game
                      </p>

                    </>

                  )}

                </div>

              </section>

            </div>

          </div>

          <div className="hidden items-center justify-between border-t border-white/10 pt-5 lg:flex">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">
              GTA Vault Arcade
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/20">
              Los Santos • Blaine County
            </p>

          </div>

        </div>

      </main>
    );
  }

  /*
   * NOT ENOUGH LOCATIONS
   */
  if (!currentLocation) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-[#050507] px-4 text-white">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
            GTA Vault Arcade
          </p>

          <h1 className="mt-4 text-3xl font-black">
            Not enough locations
          </h1>

          <p className="mt-3 text-white/40">
            Save at least 5 locations in the
            Location Editor before playing.
          </p>

          <a
            href="/games"
            className="mt-7 inline-flex border border-pink-500/30 bg-pink-500/[0.05] px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-pink-400 transition hover:bg-pink-500/10"
          >
            ← Back to Games
          </a>

        </div>

      </main>
    );
  }

  /*
   * FINAL RESULTS
   */
  if (gameOver) {
    const percentage = Math.round(
      (score / 25000) * 100
    );

    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-[#050507] px-4 py-6 text-white sm:px-8 lg:px-10 xl:px-14 2xl:px-20">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(236,72,153,0.11),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.07),transparent_30%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto w-full">

          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">

            <a
              href="/games"
              className="group text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
            >
              <span className="mr-2 inline-block transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to Games
            </a>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
              Results
            </span>

          </div>

          <div className="grid w-full gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10">

            <section className="flex min-h-[500px] flex-col justify-center border border-white/10 bg-[#09090d]/90 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-12 lg:p-14">

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-pink-400">
                GTA Vault Arcade
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Game complete
              </h1>

              <p className="mt-3 text-sm text-white/30">
                Your final location score
              </p>

              <div className="mt-10">

                <p className="text-7xl font-black tracking-tight text-white sm:text-8xl">
                  {score.toLocaleString()}
                </p>

                <p className="mt-2 text-sm font-medium text-white/30">
                  / 25,000 points
                </p>

              </div>

              <div className="mx-auto mt-8 w-full max-w-md">

                <div className="h-2 overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-300"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-pink-400">
                  {percentage}% accuracy
                </p>

              </div>

              {/* FINAL ACTIONS */}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">

                {/* PLAY AGAIN */}

                <button
                  onClick={restartGame}
                  className="group flex min-h-12 items-center justify-center gap-2 bg-pink-500 px-5 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(236,72,153,0.18)] transition-all duration-300 hover:bg-pink-400 hover:shadow-[0_0_45px_rgba(236,72,153,0.3)]"
                >
                  Play again

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* BACK TO GAMES */}

                <a
                  href="/games"
                  className="group flex min-h-12 items-center justify-center gap-2 border border-white/10 bg-white/[0.025] px-5 py-4 text-sm font-black uppercase tracking-wider text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="transition-transform group-hover:-translate-x-1">
                    ←
                  </span>

                  Back to games
                </a>

                {/* HOME */}

                <a
                  href="/"
                  className="group flex min-h-12 items-center justify-center gap-2 border border-white/10 bg-white/[0.025] px-5 py-4 text-sm font-black uppercase tracking-wider text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  Home

                  <span className="transition-transform group-hover:-translate-y-0.5">
                    ↑
                  </span>
                </a>

              </div>

            </section>

            <section className="border border-white/10 bg-[#09090d]/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10 lg:p-12">

              <div className="flex items-center justify-between border-b border-white/10 pb-6">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
                    Performance
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Round breakdown
                  </h2>

                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-white/20">
                  05 rounds
                </span>

              </div>

              <div className="mt-6 space-y-3">

                {[0, 1, 2, 3, 4].map(
                  (index) => {
                    const points =
                      roundScores[index] ?? 0;

                    const roundPercentage =
                      (points / 5000) * 100;

                    return (
                      <div
                        key={index}
                        className="border border-white/5 bg-white/[0.025] p-4 sm:p-5"
                      >

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-4">

                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500/10 text-xs font-black text-pink-400">
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <div>

                              <p className="text-sm font-bold text-white">
                                Round {index + 1}
                              </p>

                              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/20">
                                Location challenge
                              </p>

                            </div>

                          </div>

                          <div className="text-right">

                            <p className="text-lg font-black text-white">
                              {points.toLocaleString()}
                            </p>

                            <p className="text-[10px] text-white/20">
                              / 5,000
                            </p>

                          </div>

                        </div>

                        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">

                          <div
                            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-300"
                            style={{
                              width: `${roundPercentage}%`,
                            }}
                          />

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

              <div className="mt-7 border-t border-white/10 pt-6">

                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/20">
                    Final score
                  </span>

                  <span className="text-xl font-black text-pink-400">

                    {score.toLocaleString()}

                    <span className="ml-1 text-xs font-medium text-white/20">
                      / 25,000
                    </span>

                  </span>

                </div>

              </div>

            </section>

          </div>

        </div>

      </main>
    );
  }

  const correctAnswer = submitted
    ? currentLocation.answer
    : null;

  const roundProgress =
    (round / 5) * 100;

  return (
    <main className="min-h-screen w-full bg-[#050507] px-4 py-5 text-white sm:px-8 lg:px-10 xl:px-12 2xl:px-16">

      <div className="w-full">

        <nav className="flex items-center justify-between border-b border-white/10 pb-5">

          <a
            href="/games"
            className="group text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
          >
            <span className="mr-2 inline-block transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Games
          </a>

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
            Arcade
          </span>

        </nav>

        <header className="flex flex-col gap-5 py-7 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              GTA Vault Arcade
            </p>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Guess the Location
            </h1>

            <p className="mt-2 text-sm text-white/35 sm:text-base">
              Find the location shown in the image.
            </p>

          </div>

          <div className="flex items-center gap-8 border-l-2 border-pink-500 pl-4">

            <div>

              <p className="text-xs font-medium uppercase tracking-wider text-white/25">
                Round
              </p>

              <p className="mt-1 text-xl font-bold">

                {String(round).padStart(
                  2,
                  "0"
                )}{" "}

                <span className="text-sm font-normal text-white/25">
                  / 05
                </span>

              </p>

            </div>

            <div>

              <p className="text-xs font-medium uppercase tracking-wider text-white/25">
                Score
              </p>

              <p className="mt-1 text-xl font-bold text-pink-400">
                {score.toLocaleString()}
              </p>

            </div>

          </div>

        </header>

        <div className="mb-7">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Game progress
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
              {round} / 5
            </span>

          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/5">

            <div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-300 transition-all duration-500"
              style={{
                width: `${roundProgress}%`,
              }}
            />

          </div>

        </div>

        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">

          <section className="min-w-0">

            <div className="mb-4 flex items-center gap-3">

              <span className="text-sm font-bold tracking-wider text-white/30">
                01
              </span>

              <h2 className="text-lg font-bold">
                Where am I?
              </h2>

            </div>

            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#111116]">

              <img
                src={currentLocation.image}
                alt="GTA location to identify"
                className="h-full w-full object-cover"
              />

            </div>

            <p className="mt-3 text-sm text-white/25">
              Study the image carefully before
              placing your guess.
            </p>

          </section>

          <section className="min-w-0">

            <div className="mb-4 flex items-center gap-3">

              <span className="text-sm font-bold tracking-wider text-white/30">
                02
              </span>

              <h2 className="text-lg font-bold">
                Place your pin
              </h2>

            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#101b38]">

              <div
                ref={viewportRef}
                className="group absolute inset-0 overflow-x-hidden overflow-y-auto [scrollbar-color:rgba(236,72,153,0.7)_rgba(255,255,255,0.08)] [scrollbar-width:thin]"
                onPointerDown={startDrag}
                onPointerMove={drag}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                style={{
                  cursor: submitted
                    ? "default"
                    : zoom > 1
                      ? "grab"
                      : "crosshair",
                }}
              >

                <div
                  ref={mapRef}
                  className="relative w-full"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                    transformOrigin:
                      "top center",
                  }}
                >

                  <img
                    src="/games/map.jpg"
                    alt="Interactive GTA map"
                    className="pointer-events-none block h-auto w-full opacity-35 transition-opacity duration-300 group-hover:opacity-100"
                    draggable={false}
                  />

                  {/* PLAYER PIN */}

                  {pin && (
                    <div
                      className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full"
                      style={{
                        left: `${pin.x}%`,
                        top: `${pin.y}%`,
                      }}
                    >

                      <svg
                        width="36"
                        height="44"
                        viewBox="0 0 36 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]"
                      >

                        <path
                          d="M18 42C15.5 36 3 23 3 16C3 7.72 9.72 1 18 1C26.28 1 33 7.72 33 16C33 23 20.5 36 18 42Z"
                          fill="#ef4444"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />

                        <circle
                          cx="18"
                          cy="16"
                          r="5"
                          fill="white"
                        />

                      </svg>

                    </div>
                  )}

                  {/* CORRECT PIN */}

                  {correctAnswer && (
                    <div
                      className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full"
                      style={{
                        left: `${correctAnswer.x}%`,
                        top: `${correctAnswer.y}%`,
                      }}
                    >

                      <svg
                        width="24"
                        height="30"
                        viewBox="0 0 36 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]"
                      >

                        <path
                          d="M18 42C15.5 36 3 23 3 16C3 7.72 9.72 1 18 1C26.28 1 33 7.72 33 16C33 23 20.5 36 18 42Z"
                          fill="#22c55e"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />

                        <circle
                          cx="18"
                          cy="16"
                          r="5"
                          fill="white"
                        />

                      </svg>

                    </div>
                  )}

                  {/* CONNECTION LINE */}

                  {pin && correctAnswer && (
                    <svg
                      className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >

                      <defs>

                        <filter
                          id="lineGlow"
                          x="-50%"
                          y="-50%"
                          width="200%"
                          height="200%"
                        >

                          <feGaussianBlur
                            stdDeviation="2"
                            result="blur"
                          />

                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>

                        </filter>

                      </defs>

                      <line
                        x1={pin.x}
                        y1={pin.y}
                        x2={correctAnswer.x}
                        y2={correctAnswer.y}
                        stroke="#3b1027"
                        strokeWidth="7"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />

                      <line
                        x1={pin.x}
                        y1={pin.y}
                        x2={correctAnswer.x}
                        y2={correctAnswer.y}
                        stroke="#ec4899"
                        strokeWidth="5"
                        strokeLinecap="round"
                        opacity="0.9"
                        filter="url(#lineGlow)"
                        vectorEffect="non-scaling-stroke"
                      />

                      <line
                        x1={pin.x}
                        y1={pin.y}
                        x2={correctAnswer.x}
                        y2={correctAnswer.y}
                        stroke="#fbcfe8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />

                    </svg>
                  )}

                </div>

              </div>

              {/* MAP CONTROLS */}

              <div
                className="absolute right-3 top-3 z-30 flex items-center gap-1 border border-white/10 bg-black/60 p-1 backdrop-blur-md"
                onPointerDown={(e) =>
                  e.stopPropagation()
                }
                onPointerUp={(e) =>
                  e.stopPropagation()
                }
              >

                <button
                  onClick={() =>
                    changeZoom(-0.25)
                  }
                  disabled={zoom <= 1}
                  className="flex h-9 w-9 items-center justify-center text-xl font-bold text-white transition hover:bg-pink-500/20 hover:text-pink-300 disabled:opacity-30"
                  aria-label="Zoom out"
                >
                  −
                </button>

                <button
                  onClick={() =>
                    changeZoom(0.25)
                  }
                  disabled={zoom >= 4}
                  className="flex h-9 w-9 items-center justify-center text-xl font-bold text-white transition hover:bg-pink-500/20 hover:text-pink-300 disabled:opacity-30"
                  aria-label="Zoom in"
                >
                  +
                </button>

                <button
                  onClick={resetMap}
                  className="px-2 py-2 text-xs font-semibold text-white transition hover:bg-pink-500/20 hover:text-pink-300"
                >
                  Reset
                </button>

              </div>

            </div>

            <p className="mt-3 text-center text-xs text-white/25">
              Scroll to explore the map. Use + and −
              to zoom.
            </p>

            {/* ROUND RESULTS */}

            {submitted && (
              <div className="mt-5 overflow-hidden border border-white/10 bg-[#09090d] shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                <div className="border-b border-white/10 bg-gradient-to-r from-pink-500/10 to-transparent px-5 py-4">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-400">
                        Round {round} result
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Location revealed
                      </p>

                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-sm text-green-400">
                      ✓
                    </div>

                  </div>

                </div>

                <div className="grid grid-cols-2 divide-x divide-white/10">

                  <div className="p-5">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
                      Distance
                    </p>

                    <p className="mt-2 text-3xl font-black tracking-tight text-white">

                      {distance !== null
                        ? distance.toLocaleString()
                        : "—"}

                      <span className="ml-1 text-sm font-medium text-white/25">
                        m
                      </span>

                    </p>

                  </div>

                  <div className="bg-pink-500/[0.05] p-5">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
                      Round score
                    </p>

                    <p className="mt-2 text-3xl font-black tracking-tight text-pink-400">
                      +{roundScore?.toLocaleString()}
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-white/20">
                      / 5,000
                    </p>

                  </div>

                </div>

                <div className="border-t border-white/10 px-5 py-4">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-medium text-white/25">
                      Total score
                    </span>

                    <span className="text-sm font-black text-white">

                      {score.toLocaleString()}

                      <span className="ml-1 text-xs font-medium text-white/20">
                        / 25,000
                      </span>

                    </span>

                  </div>

                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-300"
                      style={{
                        width: `${Math.min(
                          100,
                          (score / 25000) *
                            100
                        )}%`,
                      }}
                    />

                  </div>

                </div>

              </div>
            )}

            {/* GAME ACTIONS */}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={clearPin}
                disabled={!pin || submitted}
                className="min-h-12 flex-1 border border-white/15 px-5 py-3 text-sm font-semibold text-white/50 transition hover:border-white/30 hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
              >
                Clear pin
              </button>

              {submitted ? (

                <button
                  onClick={nextRound}
                  className="group min-h-12 flex-1 bg-pink-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
                >

                  {round === 5
                    ? "View results"
                    : "Next round"}

                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>

                </button>

              ) : (

                <button
                  onClick={submitGuess}
                  disabled={!pin}
                  className="min-h-12 flex-1 bg-pink-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit guess →
                </button>

              )}

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}