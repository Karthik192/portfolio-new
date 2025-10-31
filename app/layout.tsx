import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/Overlay/Overlay";
import "./globals.css";
import HomeDetails from "./components/HomeDetails/HomeDetails";
import WorkDetails from "./components/WorkDetails/WorkDetails";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Me | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="relative h-full antialiased selection:bg-purple-600/20 selection:text-purple-400 dark:bg-black">
        <Navbar />
        <main className="relative flex flex-col items-center justify-center">
          {children}
        </main>
        <HomeDetails />
        <WorkDetails />
        <Overlay />
      </body>
    </html>
  );
}
