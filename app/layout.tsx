import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Drive Ease",
  description: "Discover the best cars in Namibia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
