import Link from "next/link";

export default function Header(){
  return(
    <header className="relative z-10 w-full bg-[#fbf7f2]">
      <div className="mx-auto max-w-[1400px] px-10 py-10 flex items-center justify-between">

          <Link href="/" className="text-[20px] font-serif tracking-wide text-[#223614]">Lilac Template</Link>
          <nav className="flex gap-10 text-[16px] text-[#223614]">
            <Link href="/blog" className="hover:opacity-70 transition">Blog</Link>
            <Link href="/contact" className="hover:opacity-70 transition">Contact</Link>
          </nav>
      </div>
    </header>
  );
}