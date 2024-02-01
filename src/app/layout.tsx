import "@/styles/globals.css";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { Providers } from "@/components/providers";
import SideNav from "@/components/SideNav";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={cn("h-full antialiased", fontSans.className)}>
        <Providers>
          <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <SideNav />

            <div className="flex flex-col">
              <Header />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
