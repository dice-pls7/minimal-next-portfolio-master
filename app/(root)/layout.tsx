import { AwwwardsNav, CustomCursor, AwwwardsFooter } from "@/components/awwwards";
import { ModeToggle } from "@/components/common/mode-toggle";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Custom Cursor */}
      {/* <CustomCursor /> */}
      
      {/* Awwwards Navigation */}
      {/* <AwwwardsNav items={routesConfig.mainNav} /> */}
      
      {/* Main Content with top padding for fixed nav */}
      <main className="flex-1 pt-20">{children}</main>
      
      {/* Awwwards Footer */}
      {/* <AwwwardsFooter /> */}
    </div>
  );
}
