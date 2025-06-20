import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const truncateText = (
  text: string,
  maxChars: number
): { truncated: string; isTruncated: boolean } => {
  if (text.length <= maxChars) {
    return { truncated: text, isTruncated: false };
  }

  // Find the last space before the character limit to avoid cutting words
  const truncated = text.substring(0, maxChars);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    return {
      truncated: truncated.substring(0, lastSpaceIndex) + "...",
      isTruncated: true,
    };
  }

  return {
    truncated: truncated + "...",
    isTruncated: true,
  };
};
