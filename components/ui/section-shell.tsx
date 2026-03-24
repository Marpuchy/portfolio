import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("shell scroll-mt-28 px-4 py-[var(--section-space)] sm:px-6", className)}
    >
      <SectionHeading label={label} title={title} description={description} />
      <div className={cn("mt-6 sm:mt-7", contentClassName)}>{children}</div>
    </section>
  );
}
