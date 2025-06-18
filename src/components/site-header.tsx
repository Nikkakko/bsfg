import { DepositDisplay, Notifications, SiteLogo, UserProfile } from "./index";

export default function SiteHeader() {
  return (
    <header className="bg-secondaryBackground ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-2.5 py-3.5">
          <SiteLogo />
          <DepositDisplay />

          <div className="flex items-center gap-2.5">
            <Notifications />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
}
