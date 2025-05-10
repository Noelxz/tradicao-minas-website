import type { Metadata } from "next";
import { Inter, Lobster, Pacifico, Montserrat } from "next/font/google"; // Added Lobster, Pacifico, Montserrat
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext"; // Adjusted path

// Font examples - choose one or combine as needed
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lobster = Lobster({ subsets: ["latin"], weight: "400", variable: "--font-lobster" }); // Decorative/Headings
const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-pacifico" }); // Decorative/Brand
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" }); // Body/UI Text

export const metadata: Metadata = {
  title: "Tradição de Minas - Sabores Autênticos",
  description: "Descubra os autênticos molhos e temperos da Tradição de Minas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning> {/* Added suppressHydrationWarning for next-themes compatibility if used, good practice with theme switching */} 
      <body
        className={`${inter.variable} ${lobster.variable} ${pacifico.variable} ${montserrat.variable} font-montserrat antialiased bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

