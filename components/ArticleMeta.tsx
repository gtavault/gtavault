type ArticleMetaProps = {
  updated: string;
};

export default function ArticleMeta({ updated }: ArticleMetaProps) {
  return (
    <p className="mt-4 text-sm text-zinc-400">
      By <span className="font-semibold text-white">GTA Vault</span> • Updated {updated}
    </p>
  );
}