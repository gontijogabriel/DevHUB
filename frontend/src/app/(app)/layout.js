import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeDarkMode } from "@/providers/ThemeProvider";

export const metadata = {
  title: "<DevHUB/>",
  description: "Conecte-se com desenvolvedores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-jetBrainsMono bg-gray-50 text-gray-900 dark:text-gray-50 dark:bg-gray-900">
        <ThemeDarkMode>
          <Header />
            {children}
          <Footer />
        </ThemeDarkMode>
      </body>
    </html>
  );
}
