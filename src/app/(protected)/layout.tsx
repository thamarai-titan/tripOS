import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { House, Calendar, CirclePlus } from "lucide-react";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4">
      {children}
      <div className="fixed bottom-8 left-0 w-full flex justify-center">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">
              <House />
              <Link href="/dashboard">Home</Link>
            </TabsTrigger>
            <TabsTrigger value="password">
              <Calendar />
              <Link href="/mytrips">My Trips</Link>
            </TabsTrigger>
            <TabsTrigger value="join">
              <CirclePlus />
              <Link href="/join">Join</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
