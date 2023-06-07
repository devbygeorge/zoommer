import Brands from "@/components/Brands";
import Products from "@/components/Products";
import SectionsBrake from "@/components/SectionsBrake";

export default function Home() {
  return (
    <main className="main">
      <Brands />
      <SectionsBrake />
      <Products />
    </main>
  );
}
