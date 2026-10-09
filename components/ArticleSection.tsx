import { ReactNode } from "react";

interface ArticleSectionProps {
  id: string;
  children: ReactNode;
}

export default function ArticleSection({
  id,
  children,
}: ArticleSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 py-20 first:pt-0"
    >
      <div className="mx-auto max-w-5xl">
        {children}
      </div>
    </section>
  );
}