import { Inter, Island_Moments, Montserrat } from "next/font/google";
import DestaqueHeaderComponent from "./DestaqueHeaderComponent";
import ImagesHeaderComponents from "./ImagesHeaderComponents";
import Link from "next/link";
import ToggleUI from "./ToggleUl";

const island = Island_Moments({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function HeaderComponents() {
  return (
    <header className="w-full flex flex-col bg-backgroundHeader text-white">
      <nav className="w-full flex justify-between items-center py-8 px-16 xl:gap-[300px] 2xl:gap-[400px] bg-backgroundHeaderNav">
        <h1
          className={`${island.className} text-4xl xl:text-6xl 2xl:w-11 tracking-[10px] xl:w-fit`}
        >
          <Link href={"/"}>Sandra Saraiva</Link>
        </h1>
        <ToggleUI />
      </nav>
      <article
        className={`${montserrat.className} grid xl:grid-cols-2 w-full gap-0 xl:gap-32 pr-0 xl:pr-16`}
        id="home"
      >
        <DestaqueHeaderComponent />
        <ImagesHeaderComponents />
      </article>
    </header>
  );
}
