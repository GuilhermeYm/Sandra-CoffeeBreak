import { Inter, Island_Moments, Montserrat } from "next/font/google";
import DestaqueHeaderComponent from "./DestaqueHeaderComponent";
import ImagesHeaderComponents from "./ImagesHeaderComponents";

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
      <nav className="w-full flex justify-between items-center py-8 px-16 xl:gap-[300px] 2xl:gap-[400px] bg-backgroundHeaderNav ">
        <h1 className={`${island.className} text-6xl 2xl:w-11 tracking-[10px] xl:w-fit`}>
          Sandra Saraiva
        </h1>
        <ul className="py-8 px-5 flex gap-11 items-center">
          <li
            id="da"
            className={`${inter.className} 2xl:text-4xl xl:text-2xl tracking-[5px]`}
          >
            Home
          </li>
          <li
            id="da"
            className={`${inter.className} 2xl:text-4xl xl:text-2xl tracking-[5px]`}
          >
            Contato
          </li>
          <li
            id="da"
            className={`${inter.className}  tracking-[5px] 2xl:text-4xl xl:text-2xl`}
          >
            Sobre nós
          </li>
          <li
            id="da"
            className={`${inter.className} tracking-[5px] 2xl:text-4xl xl:text-2xl`}
          >
            Github
          </li>
        </ul>
      </nav>
      <article className={`${montserrat.className} flex w-full gap-32 pr-16`}>
        <DestaqueHeaderComponent />
        <ImagesHeaderComponents />
      </article>
    </header>
  );
}
