import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Escudo Talento · Prueba Pagada", description: "Trabajo real en pequeño. Prueba verificable para tu siguiente oportunidad." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-MX"><body>{children}</body></html>; }
