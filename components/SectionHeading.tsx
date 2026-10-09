interface SectionHeadingProps {

  eyebrow?: string;

  title: string;

  description?: string;

}

export default function SectionHeading({

  eyebrow,

  title,

  description,

}: SectionHeadingProps) {

  return (

    <header className="mb-10">

      {eyebrow && (

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-pink-400">

          {eyebrow}

        </p>

      )}

      <h2 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">

        {title}

      </h2>

      {description && (

        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">

          {description}

        </p>

      )}

    </header>

  );

}