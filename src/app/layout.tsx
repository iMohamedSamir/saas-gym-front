import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
