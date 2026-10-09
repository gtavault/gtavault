interface ArticleMetaProps {
  updated: string;
  readingTime?: string;
}

export default function ArticleMeta({
  updated,
  readingTime = "5 min read",
}: ArticleMetaProps) {
  return (
    <p className="mt-4 text-sm text-zinc-400">
      By <span className="font-semibold text-white">GTA Vault</span> • Updated {updated} • {readingTime} min read
    </p>
  );
}