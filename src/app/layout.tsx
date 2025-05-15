import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const titleH1 = localFont({
  src: "../../public/fonts/MinionPro-Semibold.otf",
  style: "italic",
});
const titleH2 = localFont({
  src: "../../public/fonts/MinionPro-Semibold.otf",
  style: "italic",
});
const ongletFont = localFont({
  src: "../../public/fonts/MinionPro-It.otf",
});
const infoFont = localFont({
  src: "../../public/fonts/FuturaStdMedium.otf",
  style: "italic"
});
const navFont = localFont({
  src: "../../public/fonts/FuturaStdMedium.otf",
  style: "normal"
});


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
      <body
        className={`
          ${titleH1.className} 
          ${titleH2.className} 
          ${ongletFont.className} 
          ${infoFont.className} 
          ${navFont.className} 
          antialiased
          `}
      >
        {children}
      </body>
    </html>
  );
}
