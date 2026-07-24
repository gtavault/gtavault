type CardProps = {
  href: string;
  title: string;
  description?: string;
};

export default function Card({ href, title, description }: CardProps) {
  return (
    <a
      href={href}
      className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition block"
    >
      <h2 className="text-xl font-semibold">{title}</h2>

      {description && (
        <p className="text-zinc-400 mt-2 text-sm">
          {description}
        </p>
      )}
    </a>
  );
}