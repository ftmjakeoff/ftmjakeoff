import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-black text-red-500 animate-glow">FTMJakeOff</h1>
      <p className="text-3xl mt-6">Own my needy aching boycunt</p>
      <Link href="/breed" className="mt-10 bg-red-600 px-12 py-6 rounded-full text-3xl font-bold animate-pulse">
        BREED ME NOW
      </Link>
    </div>
  );
}
