import EventComponents from "@/components/EventComponents";
import HeaderComponents from "../components/HeaderComponents";
import AboutUsComponent from "@/components/AboutUsComponent";
import ProductsTitle from "@/components/ProductsTitle";
import ShowTheBestProducts from "@/components/ShowTheBestProducts";
import ContactComponent from "@/components/ContactComponent";

export default function Home() {
  return (
   <>
    <HeaderComponents />
    <main className="w-full">
      <EventComponents />
      <AboutUsComponent />
      <ProductsTitle />
      <ShowTheBestProducts />
      <ContactComponent />
    </main>
   </>
  );
}
