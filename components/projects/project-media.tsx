import Image from "next/image";

import { cn } from "@/lib/utils";

type ProjectMediaProps = {
  imageUrl: string;
  imageAlt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectMedia({
  imageUrl,
  imageAlt,
  className,
  priority = false,
  sizes = "(max-width: 767px) 100vw, (max-width: 1279px) 60vw, 42vw",
}: ProjectMediaProps) {
  return (
    <div className={cn("project-media", className)}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className="project-media__image"
      />
      <div className="project-media__shade" aria-hidden="true" />
    </div>
  );
}
