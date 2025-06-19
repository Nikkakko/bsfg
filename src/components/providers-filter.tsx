"use client";
import { MultiSelect } from "@/components/ui/multi-select";
import { DiceIcon, LayoutListIcon } from "./shared/icons";
import { useQueryStates } from "nuqs";
import { providersParams } from "@/hooks/params/providers-params";

const providersData = [
  { value: "all", label: "All Providers" },
  { value: "bgaming", label: "Bgaming" },
  { value: "gamebeat", label: "GameBeat" },
  { value: "pragmaticplay", label: "Pragmatic Play" },
  { value: "netent", label: "NetEnt" },
  { value: "playtech", label: "Playtech" },
];

export default function ProvidersFilter() {
  const [{ providers: providersParam }, setProviders] = useQueryStates(
    providersParams,
    {
      shallow: false,
      clearOnDefault: true,
    }
  );

  // Remove 'all' from selected values for MultiSelect
  const selected = providersParam.length > 0 ? providersParam : [];

  // Prepare options for MultiSelect, with icons
  const multiSelectOptions = providersData
    .filter(item => item.value !== "all")
    .map(item => ({
      ...item,
      icon: DiceIcon,
    }));

  return (
    <div className="w-full">
      <MultiSelect
        options={multiSelectOptions}
        onValueChange={values => {
          if (values.length === 0) {
            setProviders({ providers: [] });
          } else {
            setProviders({ providers: values });
          }
        }}
        triggerIcon={<LayoutListIcon size={16} color="white" />}
        defaultValue={selected}
        placeholder="Providers"
      />
    </div>
  );
}
