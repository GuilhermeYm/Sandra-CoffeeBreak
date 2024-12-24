import { Inter, Island_Moments, Montserrat } from "next/font/google";
import DestaqueHeaderComponent from "./DestaqueHeaderComponent";
import ImagesHeaderComponents from "./ImagesHeaderComponents";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";

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

const inter = Inter({
  weight: ["400"],
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
        <div className="flex xl:hidden">
          <IoReorderThree className="text-5xl"/>
        </div>
        <ul className="py-8 px-5 gap-11 items-center hidden xl:flex">
          <li
            id="da"
            className={`${inter.className} 2xl:text-4xl xl:text-2xl tracking-[5px]`}
          >
            <Link href={"#home"}>Home</Link>
          </li>
          <li
            id="da"
            className={`${inter.className} 2xl:text-4xl xl:text-2xl tracking-[5px]`}
          >
            <Link href={"#contact"}>Contato</Link>
          </li>
          <li
            id="da"
            className={`${inter.className}  tracking-[5px] 2xl:text-4xl xl:text-2xl`}
          >
            <Link href={"#aboutUs"}>Sobre nós</Link>
          </li>
          <li
            id="da"
            className={`${inter.className} tracking-[5px] 2xl:text-4xl xl:text-2xl`}
          >
            <Link href={"github.com/GuilhermeYm"}>Github</Link>
          </li>
        </ul>
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
