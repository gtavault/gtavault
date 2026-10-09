"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="my-24">

      <div className="space-y-4">

        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <h3 className="text-lg font-bold text-white">
                {item.question}
              </h3>

              <ChevronDown
                className={`transition duration-300 ${
                  open === index
                    ? "rotate-180 text-pink-400"
                    : "text-zinc-400"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                open === index
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-8 text-zinc-400">
                  {item.answer}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}