
import { createHmac, timingSafeEqual } from "crypto";

export function verifyEditorToken(token: string, secret: string) {
  const parts = token.split(":");

  if (parts.length !== 3) return false;

  const [name, expiryText, signature] = parts;
  const expiry = Number(expiryText);

  if (
    name !== "editor" ||
    !Number.isSafeInteger(expiry) ||
    expiry <= Date.now() ||
    !/^[a-f0-9]{64}$/.test(signature)
  ) {
    return false;
  }

  const payload = `${name}:${expiryText}`;

  const expected = createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return timingSafeEqual(
    Buffer.from(signature, "hex"),
    Buffer.from(expected, "hex")
  );
}
