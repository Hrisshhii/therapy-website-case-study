import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen bg-white">
        <Hero />
      </section>

      {/* Services */}
      <section>
        Services
      </section>

      {/* About */}
      <section>
        About
      </section>
    </main>
  );
}
