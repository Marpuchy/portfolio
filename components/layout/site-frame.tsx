import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SystemCanvasBackground } from "@/components/layout/system-canvas-background";
import { navigationItems, profile } from "@/data/profile";

type SiteFrameProps = {
  children: React.ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <SystemCanvasBackground />
      <SiteHeader items={navigationItems} name={profile.name} />
      <main id="top" className="relative z-10">
        {children}
      </main>
      <SiteFooter name={profile.name} />
    </div>
  );
}
