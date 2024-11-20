import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";

const poppins = Poppins({ weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Yitzhak B. Rodriguez",
    template: '%ns | Yitzhak B. Rodriguez',
  },
  description: "Hi im Yitzhak B. Rodriguez Fullstack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins} antialiased dark`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
