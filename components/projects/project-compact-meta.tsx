import { cn } from "@/lib/utils";

export type ProjectCompactMetaItem = {
  label: string;
  value: string;
};

type ProjectCompactMetaProps = {
  items: ProjectCompactMetaItem[];
  className?: string;
};

export function ProjectCompactMeta({ items, className }: ProjectCompactMetaProps) {
  return (
    <div className={cn("grid gap-2.5", className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[1rem] border border-[var(--border-soft)] bg-[rgba(8,12,20,0.68)] px-3.5 py-3"
        >
          <span className="eyebrow text-[0.62rem]">{item.label}</span>
          <span className="text-sm text-[var(--foreground-muted)]">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
