import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//componennt
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
// import ClarityScript from "@/components/ClarityScript"
import Script from "next/script";


const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        {/* <ClarityScript/> */}
        <Header />
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ozjgblsi0g");
          `}
        </Script>
      </body>
    </html>
  );
}