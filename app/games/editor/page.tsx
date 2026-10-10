
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyEditorToken } from "@/lib/editor-auth";
import EditorClient from "./EditorClient";

export const dynamic = "force-dynamic";

export default async function EditorPage() {
  const secret = process.env.GTA_EDITOR_SECRET;
  const cookieStore = await cookies();
  const token = cookieStore.get("gta-editor-auth")?.value;

  if (!secret || !token || !verifyEditorToken(token, secret)) {
    redirect("/games/editor/login");
  }

  return <EditorClient />;
}
