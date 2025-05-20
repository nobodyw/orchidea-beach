import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orchidea Beach II",
  description: "Bienvenue à L'hôtel Orchidea Beach II",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
