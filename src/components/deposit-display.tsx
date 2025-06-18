import { DepositIcon, DollarIcon } from "./shared/icons";

export default function DepositDisplay() {
  return (
    <div className="bg-darkBackground  rounded-md border border-border flex items-center justify-center">
      <div className="pl-2 py-2 mr-5 flex items-center gap-2">
        <DollarIcon size={24} />
        <p className="text-white font-medium text-xs leading-[14px] tracking-[0.2px]">
          500.00
        </p>
      </div>
      <div className="bg-blue p-2 rounded-r-md">
        <DepositIcon color="#ffffff" size={24} />
      </div>
    </div>
  );
}
