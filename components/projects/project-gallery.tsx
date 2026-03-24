import { ProjectMedia } from "@/components/projects/project-media";
import type { ProjectGalleryImage } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  items: ProjectGalleryImage[];
  className?: string;
};

export function ProjectGallery({ items, className }: ProjectGalleryProps) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-2", className)}>
      {items.map((item, index) => (
        <article
          key={item.src}
          className={cn(
            "surface-muted depth-card p-4 sm:p-5",
            items.length % 2 === 1 && index === 0 && "lg:col-span-2",
          )}
        >
          <ProjectMedia
            imageUrl={item.src}
            imageAlt={item.alt}
            className={cn(
              "aspect-[16/10]",
              items.length % 2 === 1 && index === 0 && "lg:aspect-[16/8]",
            )}
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
          <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
            {item.caption}
          </p>
        </article>
      ))}
    </div>
  );
}
