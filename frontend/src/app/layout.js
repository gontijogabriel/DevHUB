import Header from "@/components/Header";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";


export const metadata = {
  title: "<DevHUB/>",
  description: "Conecte-se com desenvolvedores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="font-jetBrainsMono bg-gray-50 text-gray-900 dark:text-gray-50 dark:bg-gray-900">
          <Providers>
            <Header />
              {children}
            <Footer />
          </Providers>
        </body>
    </html>
  );
}
