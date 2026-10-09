"use client";

import { useEffect, useRef, useState } from "react";

const MAP_WIDTH = 5944;
const MAP_HEIGHT = 8075;

const GTA_LEFT = -4000;
const GTA_RIGHT = 6000;
const GTA_TOP = 8000;
const GTA_BOTTOM = -4000;

type GtaPoint = {
  x: number;
  y: number;
};

type SavedLocation = {
  id: number;
  x: number;
  y: number;
};

const locations = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  image: `/games/location${i + 1}.jpg`,
}));

function gtaToPixel(point: GtaPoint) {
  const x =
    point.x * 0.677176 +
    2520.94;

  const y =
    point.y * -0.655319 +
    5427.35;

  return { x, y };
}

function pixelToGta(x: number, y: number): GtaPoint {
  return {
    x:
      (x - 2520.94) /
      0.677176,

    y:
      (y - 5427.35) /
      -0.655319,
  };
}

export default function LocationEditor() {
  const [selected, setSelected] = useState(1);

  const [zoom, setZoom] = useState(1);

  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const [lastPosition, setLastPosition] =
    useState({
      x: 0,
      y: 0,
    });

  const pointerMoved = useRef(false);

  const mapImageRef =
    useRef<HTMLImageElement>(null);

  const [gtaInput, setGtaInput] =
    useState<GtaPoint | null>(null);

  const [savedLocations, setSavedLocations] =
    useState<SavedLocation[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "gta-location-answers"
      );

    if (saved) {
      setSavedLocations(
        JSON.parse(saved)
      );
    }
  }, []);

  function handleMapClick(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (pointerMoved.current) return;

    const image =
      mapImageRef.current;

    if (!image) return;

    const rect =
      image.getBoundingClientRect();

    const pixelX =
      ((e.clientX - rect.left) /
        rect.width) *
      MAP_WIDTH;

    const pixelY =
      ((e.clientY - rect.top) /
        rect.height) *
      MAP_HEIGHT;

    if (
      pixelX < 0 ||
      pixelX > MAP_WIDTH ||
      pixelY < 0 ||
      pixelY > MAP_HEIGHT
    ) {
      return;
    }

    const gta =
      pixelToGta(
        pixelX,
        pixelY
      );

    setGtaInput({
      x: Number(gta.x.toFixed(2)),
      y: Number(gta.y.toFixed(2)),
    });
  }

  function findOnMap() {
    if (!gtaInput) return;

    setZoom(1);
    setOffset({
      x: 0,
      y: 0,
    });
  }

  function changeLocation(id: number) {
    setSelected(id);

    const existing =
      savedLocations.find(
        (location) =>
          location.id === id
      );

    if (existing) {
      setGtaInput({
        x: existing.x,
        y: existing.y,
      });
    } else {
      setGtaInput(null);
    }

    setZoom(1);
    setOffset({
      x: 0,
      y: 0,
    });
  }

  function saveLocation() {
    if (!gtaInput) return;

    const updated = [
      ...savedLocations.filter(
        (location) =>
          location.id !== selected
      ),

      {
        id: selected,
        x: gtaInput.x,
        y: gtaInput.y,
      },
    ].sort(
      (a, b) => a.id - b.id
    );

    setSavedLocations(updated);

    localStorage.setItem(
      "gta-location-answers",
      JSON.stringify(updated)
    );
  }

  function copyLocationData() {
    if (!gtaInput) return;

    navigator.clipboard.writeText(
      `{ id: ${selected}, x: ${gtaInput.x}, y: ${gtaInput.y} },`
    );
  }

  function changeZoom(
    amount: number
  ) {
    setZoom((current) =>
      Math.min(
        4,
        Math.max(
          1,
          current + amount
        )
      )
    );
  }

  function resetMap() {
    setZoom(1);

    setOffset({
      x: 0,
      y: 0,
    });
  }

  function startDrag(
    e: React.PointerEvent<HTMLDivElement>
  ) {
    pointerMoved.current = false;

    setDragging(true);

    setLastPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function moveDrag(
    e: React.PointerEvent<HTMLDivElement>
  ) {
    if (!dragging) return;

    const dx =
      e.clientX -
      lastPosition.x;

    const dy =
      e.clientY -
      lastPosition.y;

    if (
      Math.abs(dx) > 2 ||
      Math.abs(dy) > 2
    ) {
      pointerMoved.current = true;
    }

    setOffset(
      (current) => ({
        x: current.x + dx,
        y: current.y + dy,
      })
    );

    setLastPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function stopDrag() {
    setDragging(false);
  }

  const pin =
    gtaInput
      ? gtaToPixel(gtaInput)
      : null;

  return (
    <main className="min-h-screen bg-[#08070d] p-6 text-white">

      <div className="mx-auto max-w-7xl space-y-6">

        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Location Editor
          </h1>

          <p className="mt-2 text-gray-400">
            Use real GTA V world coordinates
            to position every location.
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Map: {MAP_WIDTH} ×{" "}
            {MAP_HEIGHT}px
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* LOCATION IMAGE */}

          <section className="space-y-3">

            <h2 className="text-xl font-semibold">
              Location {selected} of 27
            </h2>

            <img
              src={
                locations[
                  selected - 1
                ].image
              }
              alt={`Location ${selected}`}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />

            <div className="flex flex-wrap gap-2">

              {locations.map(
                (location) => {

                  const saved =
                    savedLocations.some(
                      (savedLocation) =>
                        savedLocation.id ===
                        location.id
                    );

                  return (
                    <button
                      key={location.id}
                      onClick={() =>
                        changeLocation(
                          location.id
                        )
                      }
                      className={`rounded-lg px-3 py-2 ${
                        selected ===
                        location.id
                          ? "bg-purple-600"
                          : saved
                          ? "bg-green-600/30"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {location.id}

                      {saved && (
                        <span className="ml-1 text-green-400">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                }
              )}

            </div>

          </section>

          {/* MAP */}

          <section className="space-y-3">

            <h2 className="text-xl font-semibold">
              GTA V Map
            </h2>

            <div
              className={`relative h-[600px] overflow-hidden rounded-xl ${
                dragging
                  ? "cursor-grabbing"
                  : "cursor-crosshair"
              }`}
              onPointerDown={startDrag}
              onPointerMove={moveDrag}
              onPointerUp={stopDrag}
              onPointerLeave={stopDrag}
              onClick={handleMapClick}
            >

              <div
                className="absolute left-1/2 top-1/2"
                style={{
                  height: "100%",
                  aspectRatio:
                    `${MAP_WIDTH} / ${MAP_HEIGHT}`,

                  transform:
                    `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${zoom})`,

                  transformOrigin:
                    "center",
                }}
              >

                <img
                  ref={mapImageRef}
                  src="/games/map.jpg"
                  alt="GTA V map"
                  className="h-full w-full select-none object-fill"
                  draggable={false}
                />

                {/* PIN */}

                {pin && (
                  <div
                    className="pointer-events-none absolute z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-pink-500 shadow-lg"
                    style={{
                      left: `${
                        (pin.x /
                          MAP_WIDTH) *
                        100
                      }%`,

                      top: `${
                        (pin.y /
                          MAP_HEIGHT) *
                        100
                      }%`,
                    }}
                  />
                )}

              </div>

              {/* CONTROLS */}

              <div className="absolute right-3 top-3 z-30 flex gap-2">

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    changeZoom(-0.25);
                  }}
                  className="rounded-lg bg-black/70 px-4 py-2 text-xl font-bold backdrop-blur hover:bg-black/90"
                >
                  −
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    changeZoom(0.25);
                  }}
                  className="rounded-lg bg-black/70 px-4 py-2 text-xl font-bold backdrop-blur hover:bg-black/90"
                >
                  +
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetMap();
                  }}
                  className="rounded-lg bg-black/70 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-black/90"
                >
                  Reset
                </button>

              </div>

              <div className="absolute bottom-3 left-3 z-30 rounded-lg bg-black/70 px-3 py-2 text-sm backdrop-blur">
                Zoom:{" "}
                {zoom.toFixed(2)}×
              </div>

            </div>

            {/* COORDINATES */}

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">

              <h3 className="font-semibold">
                GTA V Coordinates
              </h3>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">

                <label className="text-sm text-gray-300">
                  X

                  <input
                    type="number"
                    value={
                      gtaInput?.x ?? ""
                    }
                    onChange={(e) =>
                      setGtaInput(
                        (current) => ({
                          x: Number(
                            e.target.value
                          ),
                          y:
                            current?.y ??
                            0,
                        })
                      )
                    }
                    className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </label>

                <label className="text-sm text-gray-300">
                  Y

                  <input
                    type="number"
                    value={
                      gtaInput?.y ?? ""
                    }
                    onChange={(e) =>
                      setGtaInput(
                        (current) => ({
                          x:
                            current?.x ??
                            0,
                          y: Number(
                            e.target.value
                          ),
                        })
                      )
                    }
                    className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none focus:border-purple-500"
                  />
                </label>

              </div>

              <button
                onClick={findOnMap}
                className="mt-3 rounded-lg bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-500"
              >
                Find on map
              </button>

              {gtaInput && (
                <div className="mt-4 space-y-1 text-sm text-gray-400">

                  <p>
                    X: {gtaInput.x}
                  </p>

                  <p>
                    Y: {gtaInput.y}
                  </p>

                  {pin && (
                    <>
                      <p>
                        Pixel X:{" "}
                        {Math.round(
                          pin.x
                        )}
                      </p>

                      <p>
                        Pixel Y:{" "}
                        {Math.round(
                          pin.y
                        )}
                      </p>
                    </>
                  )}

                </div>
              )}

              {gtaInput && (
                <div className="mt-4 flex flex-wrap gap-2">

                  <button
                    onClick={saveLocation}
                    className="rounded-lg bg-green-600 px-4 py-2 font-semibold hover:bg-green-500"
                  >
                    Save location{" "}
                    {selected}
                  </button>

                  <button
                    onClick={
                      copyLocationData
                    }
                    className="rounded-lg bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-500"
                  >
                    Copy data
                  </button>

                </div>
              )}

            </div>

            <div className="text-sm text-gray-400">
              {savedLocations.length} /
              27 locations saved
            </div>

          </section>

        </div>

      </div>

    </main>
  );
}