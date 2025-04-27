import Header from "@/components/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Yitzhak B. Rodriguez",
    template: '%ns | Yitzhak B. Rodriguez',
  },
  description: "Hi im Yitzhak B. Rodriguez Fullstack Developer.",
};

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (

    <html lang="en">
      <body className={`${poppins} antialiased dark overflow-x-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
