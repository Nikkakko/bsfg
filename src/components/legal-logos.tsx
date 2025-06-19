import { legalLogos } from "@/config/data";
import Image from "next/image";

export default function LegalLogos() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {legalLogos.map(logo => (
        <Image
          key={logo.name}
          src={logo.icon}
          alt={logo.name}
          width={35}
          height={35}
          className="w-full h-full max-w-[35px] max-h-[35px] object-contain"
        />
      ))}
    </div>
  );
}
