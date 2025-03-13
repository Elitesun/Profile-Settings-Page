import { Sidebar } from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4 md:mb-6">Account Settings</h1>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
