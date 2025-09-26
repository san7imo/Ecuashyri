import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecuashyri - En construcción",
  description: "Ecuashyri — Imagen y sonido tricolor — Sitio en construcción",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="body-bg antialiased">{children}</body>
    </html>
  );
}
