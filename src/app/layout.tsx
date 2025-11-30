
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Yitzhak B. Rodriguez",
    template: '%ns | Yitzhak B. Rodriguez',
  },
  description: "Olá sou Yitzhak B. Rodriguez Software Developer.",
};

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (

    <html lang="en">
      <body className={`${poppins.className} antialiased dark overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
