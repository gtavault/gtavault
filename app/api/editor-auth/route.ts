
import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

function createToken(secret: string, expires: number) {
  const payload = `editor:${expires}`;
  const signature = createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return `${payload}:${signature}`;
}

export async function POST(request: Request) {
  const password = process.env.GTA_EDITOR_PASSWORD;
  const secret = process.env.GTA_EDITOR_SECRET;

  if (!password || !secret) {
    return NextResponse.json(
      { error: "Editor authentication is not configured." },
      { status: 500 }
    );
  }

  let body: { password?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  if (
    typeof body.password !== "string" ||
    body.password.length !== password.length ||
    !timingSafeEqual(
      Buffer.from(body.password),
      Buffer.from(password)
    )
  ) {
    return NextResponse.json(
      { error: "Incorrect password." },
      { status: 401 }
    );
  }

  const expires = Date.now() + 8 * 60 * 60 * 1000;
  const token = createToken(secret, expires);

  const response = NextResponse.json({ authenticated: true });

  response.cookies.set("gta-editor-auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 8 * 60 * 60,
  });

  return response;
}
