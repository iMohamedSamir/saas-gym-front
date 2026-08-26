import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "أوتومارك - برنامج النمو الشامل",
  description: "النظام الآلي المتكامل المصمم لجذب المزيد من العملاء المحتملين، والمتابعة الفورية، وتنمية أعمالك المحلية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="scroll-smooth">
      <body className={`antialiased ${ibmPlexArabic.className}`}>
        {children}
      </body>
    </html>
  );
}
