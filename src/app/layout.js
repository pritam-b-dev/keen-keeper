import { Geist, Geist_Mono } from "next/font/google";
import { HistoryProvider } from "@/context/HistoryContext";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Keep Your Friendships Alive",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HistoryProvider>
          {children}
          <ToastContainer position="bottom-right" autoClose={3000} />
        </HistoryProvider>
      </body>
    </html>
  );
}
