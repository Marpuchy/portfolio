import { cn } from "@/lib/utils";

export type ProjectFact = {
  label: string;
  value: string;
  mono?: boolean;
};

type ProjectFactsProps = {
  facts: ProjectFact[];
  compact?: boolean;
  className?: string;
};

export function ProjectFacts({
  facts,
  compact = false,
  className,
}: ProjectFactsProps) {
  return (
    <div
      className={cn(
        "grid gap-3",
        compact ? "sm:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-1",
        className,
      )}
    >
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-[1.2rem] border border-[var(--border-soft)] bg-[rgba(8,12,20,0.72)] px-4 py-4"
        >
          <p className="eyebrow text-[0.62rem]">{fact.label}</p>
          <p
            className={cn(
              "mt-3 text-sm text-[var(--foreground)]",
              fact.mono && "font-[var(--font-mono)] tracking-[0.12em]",
            )}
          >
            {fact.value}
          </p>
        </div>
      ))}
    </div>
  );
}
