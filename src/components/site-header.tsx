import { DepositDisplay, Notifications, SiteLogo, UserProfile } from "./index";
import { Shell } from "@/components/ui/shell";

export default function SiteHeader() {
  return (
    <header className="bg-secondaryBackground">
      <Shell as="div">
        <div className="flex items-center justify-between px-2.5 py-3.5">
          <SiteLogo />
          <DepositDisplay amount={500.0} className="lg:hidden" />

          <div className="flex items-center gap-2.5">
            <DepositDisplay amount={500.0} className="hidden lg:flex" />
            <Notifications />
            <UserProfile />
          </div>
        </div>
      </Shell>
    </header>
  );
}
