import "./globals.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Created using next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
