import Primary from "./Components/Primary";
import Secondary from "./Components/Secondary";

export default function Home() {
  return (
    <main>
        <Primary />
        <Secondary />
      <div style={{ height: "200vh" }} />


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
