import Image from "next/image";
import React from "react";

function SkillBadge({ title, url }) {
  return (
    <span
      className="ml-5 inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border px-3 py-1 font-mono text-black text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:text-white dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none border-white-3 bg-white-2 dark:border-white/[0.14] dark:bg-neutral-900 [a&]:hover:bg-primary/90"
      aria-label="ReactJS"
    >
      <Image
        width={15}
        height={15}
        decoding="async"
        src={url}
        alt="next-logo"
        unoptimized
      />
      <span>{title}</span>
    </span>
  );
}

export default SkillBadge;
