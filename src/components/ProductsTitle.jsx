import { Montserrat } from "next/font/google";

const montserrat = Montserrat( { 
    weight: ["400", "700"],
    display: "swap",
    subsets: ["latin"]
} )

export default function ProductsTitle() {
  return (
    <article className={` ${montserrat.className} flex flex-col w-full bg-backgroundMainThreePartOne text-white py-20 2xl:items-center xl:items-start 2xl:gap-20 xl:gap-5 px-96`}>
      <h2 className="xl:text-7xl 2xl:text-8xl font-extrabold tracking-widest !leading-[70px] 2xl:mt-20 xl:mt-0">Um pouco de nós</h2>
      <p>Apresentaremos os principais produtos do nosso buffet.</p>
    </article>
  );
}
