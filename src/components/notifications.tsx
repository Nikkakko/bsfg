import { Button } from "./ui/button";
import { BellIcon } from "./shared/icons";

export default function Notifications() {
  return (
    <Button variant="icon" size="icon">
      <BellIcon />
    </Button>
  );
}
