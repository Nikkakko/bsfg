import { SiteLogo } from ".";
import { Shell } from "./ui/shell";

export default function SiteFooter() {
  return (
    <footer className="bg-secondaryBackground">
      <Shell as="div">
        <div className="flex items-center justify-between px-2.5 py-3.5 lg:px-0">
          <SiteLogo />
        </div>
      </Shell>
    </footer>
  );
}
