import Author from "@/components/Author";
import CTA from "@/components/CTA";
// import FloatingBuy from "@/components/FloatingBuy";
import Hero from "@/components/Hero";
import Order from "@/components/Order";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Order/>
      {/* <FloatingBuy /> */}
      <Author />
      <CTA />
    </>
  );
}
