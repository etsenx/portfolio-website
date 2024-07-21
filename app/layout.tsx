import Navbar from "@/components/Navbar";
import "@/styles/global.css";
import Head from "next/head";

// export const metadata = {
//   title: "Steven | Fullstack Web Developer",
//   description: "Steven Portfolio Project",
//   icon: {
//     icon: '/favicon.ico'
//   }
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <title>Steven | Fullstack Web Developer</title>
        <meta name="description" content="Steven Portfolio Project" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
