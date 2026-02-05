"use client";
/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { searchData } from "./searchData";
import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";
import Footer from "@/app/Components/Footer";


function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const router = useRouter();

  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [loading]);

  const results = useMemo(() => {
    if (!query || query.length<3 || loading) return [];
    return searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords?.some(k=>k.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, loading]);

  return (
    <section className="bg-accent-soft">
      <div className="border-b border-primary p-10 py-24">
        <div className="mx-auto px-6 max-w-437.5">
          <div className="relative mb-12  mx-auto mt-30">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-60">
              {loading ? (
                <ImSpinner2 className="animate-spin" />
              ) : (
                <FiSearch />
              )}
            </span>

            <input
              value={query}
              placeholder="Type to search..."
              className="w-full border mx-auto px-12 py-4 text-[1.8rem] outline-none bg-white"
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                setLoading(true);

                router.replace(
                  value ? `/legal/search?q=${encodeURIComponent(value)}` : "/legal/search",
                  { scroll: false }
                );
              }}
            />
          </div>

          {!loading && query.length>3 && query && results.length===0 && (
            <p className="text-sm opacity-70">
              Your search did not match any results.
            </p>
          )}

          {loading && query.length>3 && (
            <p className="text-sm opacity-70">Searching…</p>
          )}

          <ul className="space-y-12 mt-8">
            {results.map((item, i) => (
              <Link key={i} href={item.href}>
                <li className="border-b border-primary/60 py-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {item.type === "blog" && item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover shrink-0"
                    />
                  )}

                  <div>
                      <h3 className="text-[2rem] font-normal">
                        {item.title}
                      </h3>
                    
                    <p className="mt-1 italic opacity-80">
                      {item.excerpt}
                    </p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default function SearchPage(){
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading searching...</div>}>
      <SearchContent />
    </Suspense>
  )
}