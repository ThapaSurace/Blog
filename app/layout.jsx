import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import NavBar from "./components/Navbar/NavBar";
import { Dancing_Script, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: "400",
});

export const metadata = {
  title: "Zoro Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dancing.variable}`}>
      <body className={playfair.className}>
        <ThemeProvider>
          <Toaster position="bottom-right" />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
