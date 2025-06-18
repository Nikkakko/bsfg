import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/" className="cursor-pointer">
      <div className="bg-foreground w-[60px] h-8 rounded-[5px] lg:w-[75px] lg:h-10" />
    </Link>
  );
}
