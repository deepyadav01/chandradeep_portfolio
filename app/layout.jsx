import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//componennt
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
// import ClarityScript from "@/components/ClarityScript"
// import Script from "next/script";
import Metrics from "./matrics" 

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Chandradeep Portfolio",
  description: "Chandradeep Yadav Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Metrics />
      </body>
    </html>
  );
}
