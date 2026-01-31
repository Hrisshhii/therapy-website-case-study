import Link from "next/link";

export default function Header(){
  return(
    <header className="w-full bg-[#fbf7f2]">
      <div className="mx-auto max-w-[1400px] px-10 py-8 flex items-center justify-between">

        <div className="text=[20px] font-medium texxt-[#223614]">
          <Link href="/" className="text-xl font-serif tracking-wide text-[#223614]">Lilac Template</Link>
          <nav className="flex gap-8 text-[16px] text-[#223614]">
            <Link href="/blog" className="hover:opacity-70 transition">Blog</Link>
            <Link href="/contact" className="hover:opacity-70 transition">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}