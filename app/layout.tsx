import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Sora } from "next/font/google";
import { Providers } from "./redux/provider";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Hackathon",
  description:
    "This is a challenge which is mandantory to qualify in dollar-making-bootcamp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
