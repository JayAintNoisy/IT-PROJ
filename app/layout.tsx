"use client"; 

import { useState } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass = darkMode ? "bg-black text-white" : "bg-white text-black";

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body className={`${themeClass} flex flex-col min-h-screen font-sans transition-colors duration-300`}>
        
        {/* We pass the theme state into the Navbar component */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="flex-grow p-10">
          {children}
        </main>

        {/* We pass the theme state into the Footer component */}
        <Footer darkMode={darkMode} />

      </body>
    </html>
  );
}