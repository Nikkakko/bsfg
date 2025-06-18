import { Button } from "@/components/ui/button";

export default function IconWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button variant="icon" size="icon">
      {children}
    </Button>
  );
}
