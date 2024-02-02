import "@/styles/globals.css";

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <SideNav />

      <div className="flex flex-col">
        <Header />
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
}
