import { Button } from "./ui/button";
import { UserProfileIcon } from "./shared/icons";

export default function UserProfile() {
  return (
    <Button variant="icon" size="icon">
      <UserProfileIcon />
    </Button>
  );
}
