import Navbar from "@/components/Navbar";
import "@/styles/global.css";
import Head from "next/head";

export const metadata = {
  title: "Steven | Fullstack Web Developer",
  description: "Steven Portfolio Project",
  icon: {
    icon: '/public/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <header className="sticky top-0 z-10">
          <nav>
            <Navbar />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
