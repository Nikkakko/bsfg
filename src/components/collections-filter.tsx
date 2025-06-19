"use client";
import { MultiSelect } from "@/components/ui/multi-select";
import { CollectionIcon, DiceIcon } from "./shared/icons";
import { useQueryStates } from "nuqs";
import { collectionsParams } from "@/hooks/params/collection-params";

const collections = [
  { value: "all", label: "All Collections" },
  { value: "featured", label: "Featured" },
  { value: "popular", label: "Popular" },
  { value: "bonus-buy", label: "Bonus Buy" },
  { value: "fruits", label: "Fruits" },
];

export default function CollectionsFilter() {
  const [{ collections: collectionsParam }, setCollections] = useQueryStates(
    collectionsParams,
    {
      shallow: false,
      clearOnDefault: true,
    }
  );

  // Remove 'all' from selected values for MultiSelect
  const selected = collectionsParam.length > 0 ? collectionsParam : [];

  // Prepare options for MultiSelect, with icons
  const multiSelectOptions = collections
    .filter(item => item.value !== "all")
    .map(item => ({
      ...item,
      icon: DiceIcon,
    }));

  return (
    <div className="w-full  ">
      <MultiSelect
        options={multiSelectOptions}
        onValueChange={values => {
          if (values.length === 0) {
            setCollections({ collections: [] });
          } else {
            setCollections({ collections: values });
          }
        }}
        defaultValue={selected}
        placeholder="Collections"
        triggerIcon={<CollectionIcon size={16} color="white" />}
      />
    </div>
  );
}
