import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <nav className="fixed top-0 z-50 w-full bg-black/90 border-b border-red-900">
          <div className="flex justify-center gap-8 py-4 text-xl font-bold">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/breed" className="text-red-500 animate-pulse">Breed Me</Link>
            <Link href="/links" className="text-gray-300 hover:text-white">All Links</Link>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
