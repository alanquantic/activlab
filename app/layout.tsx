import type { Metadata } from "next";
import FeedbackModal from "./components/FeedbackModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Activ | Laboratorio de Análisis",
  description:
    "Home page responsiva para Activ, laboratorio especializado en análisis de productos adsorbentes basados en carbón activado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <FeedbackModal />
      </body>
    </html>
  );
}
