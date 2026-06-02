import AllProductBox from "./allproducts/page";
import Hero from "./components/Hero";
// import ProductBox from "./components/ProductBox";
import PopularProduct from "./components/popular";

export default function Home() {
  return (
    <div className="flex flex-col  bg-[#fbfdff] text-[var(--foreground)] font-sans">
      <Hero />
      <section className="mx-auto w-full space-y-6 px-4 py-10 sm:px-6">
        <PopularProduct />
        <AllProductBox />
      </section>
    </div>
  );
}
