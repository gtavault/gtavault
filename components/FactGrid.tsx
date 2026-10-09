import { ReactNode } from "react";

interface FactGridProps {
  children: ReactNode;
}

export default function FactGrid({
  children,
}: FactGridProps) {
  return (
    <section className="my-12">

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {children}

      </div>

    </section>
  );
}