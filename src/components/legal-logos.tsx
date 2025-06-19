import { legalLogos } from "@/config/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

//extends div props
interface LegalLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function LegalLogos({ ...props }: LegalLogoProps) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", props.className)}>
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
