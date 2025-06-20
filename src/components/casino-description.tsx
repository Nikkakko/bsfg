"use client";
import { Button } from "@/components/ui/button";
import { truncateText } from "@/lib/utils";
import { useState } from "react";
import { fullText } from "@/config/data";

export default function CasinoDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate text to 200 characters when not expanded
  const { truncated: displayText, isTruncated } = truncateText(fullText, 500);

  return (
    <div className="bg-darkBackground text-white p-6 rounded-lg">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          CASINO <span className="text-white font-normal">Casino</span>
        </h2>

        <div className="text-sm leading-relaxed space-y-3">
          <p>{isExpanded ? fullText : displayText}</p>
        </div>

        {isTruncated && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="bg-blue font-semibold text-sm text-white px-14 py-2 rounded-md hover:bg-blue-600  w-full lg:w-auto"
              onClick={toggleExpanded}
            >
              {isExpanded ? "READ LESS" : "READ MORE"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
