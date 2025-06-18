import { cn } from "@/lib/utils";
import { DepositIcon, DollarIcon } from "./shared/icons";

interface DepositDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
}

export default function DepositDisplay({
  amount,
  ...props
}: DepositDisplayProps) {
  return (
    <div
      className={cn(
        "bg-darkBackground  rounded-md border border-border flex items-center justify-center h-10",
        props.className
      )}
    >
      <div className="pl-2 py-2 mr-5 flex items-center gap-2">
        <DollarIcon size={24} />
        <p className="text-white font-medium text-sm  tracking-[0.2px]">
          {amount}
        </p>
      </div>
      <div className="bg-blue h-[38px] rounded-r-md flex items-center justify-center px-2 lg:px-">
        <DepositIcon color="#ffffff" size={24} className="lg:hidden" />
        <span className="hidden lg:block uppercase font-medium text-sm tracking-[0.2px] ">
          Deposit
        </span>
      </div>
    </div>
  );
}
