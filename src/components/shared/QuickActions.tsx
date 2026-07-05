import { Button } from "../ui/button";

export default function QuickActions() {
  return (
    <div className="flex space-x-4">
      <Button>Home</Button>
      <Button>Profile</Button>
      <Button>Settings</Button>
    </div>
  );
}
