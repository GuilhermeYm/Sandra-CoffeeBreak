import { Montserrat } from "next/font/google";

const montserrat = Montserrat( { 
    weight: ["400", "700"],
    display: "swap",
    subsets: ["latin"]
} )

export default function ProductsTitle() {
  return (
    <article className={` ${montserrat.className} flex flex-col w-full bg-backgroundMainThreePartOne text-white py-14 xl:py-20 2xl:items-center xl:items-start 2xl:gap-20 gap-2 xl:gap-5 px-7 xl:px-96`}>
      <h2 className="text-4xl w-10/12 xl:w-full !leading-[50px] xl:text-7xl 2xl:text-8xl font-extrabold tracking-widest xl:!leading-[70px] 2xl:mt-20 xl:mt-0">Um pouco de nós</h2>
      <p>Apresentaremos os principais produtos do nosso buffet.</p>
    </article>
  );
}
