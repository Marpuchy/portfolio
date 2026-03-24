import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SystemCanvasBackground } from "@/components/layout/system-canvas-background";
import { getSiteContent } from "@/data/site-content";
import { getRequestLocale } from "@/lib/request-locale";

type SiteFrameProps = {
  children: React.ReactNode;
};

export async function SiteFrame({ children }: SiteFrameProps) {
  const locale = await getRequestLocale();
  const siteContent = getSiteContent(locale);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <SystemCanvasBackground />
      <SiteHeader
        items={siteContent.navigationItems}
        name={siteContent.profile.name}
        interfaceLabel={siteContent.copy.header.interfaceLabel}
        locale={siteContent.locale}
        primaryNavAria={siteContent.copy.header.primaryNavAria}
        primaryMobileNavAria={siteContent.copy.header.primaryMobileNavAria}
        localeSwitcherLabel={siteContent.copy.header.localeSwitcherLabel}
      />
      <main id="top" className="relative z-10">
        {children}
      </main>
      <SiteFooter
        name={siteContent.profile.name}
        tagline={siteContent.copy.footer.tagline}
      />
    </div>
  );
}
