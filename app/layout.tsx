import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "PicSilly.ru",
  description: "Хранение изображений в безопасном виде, оптимизация через API",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", montserrat.className)}>
        {children}
      </body>
    </html>
  );
}
