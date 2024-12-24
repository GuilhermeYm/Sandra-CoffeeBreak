import { Montserrat } from "next/font/google";
import { CiCoffeeBean } from "react-icons/ci";
import { BiSolidCoffee } from "react-icons/bi";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

export default function ContactComponent() {
  return (
    <article
      className={`py-20 flex justify-center ${montserrat.className} bg-backgroundMainFour text-white w-full px-44`}
      id="contact"
    >
      <section className="rounded-3xl py-12 bg-backgroundSectionMainFour flex flex-col xl:flex-row items-center px-10 gap-16">
        <div className="text-9xl">
          <BiSolidCoffee />
        </div>
        <div>
          <h2 className="font-semibold 2xl:text-6xl xl:text-4xl text-center w-fit">
            Entre em contato conosco
          </h2>
          <div className="flex w-full items-center justify-center mt-9 gap-5">
            <div className="border rounded-[40px] px-3 py-2 hover:bg-zinc-300 hover:text-black transition-colors duration-300 cursor-pointer">
              <Link href={"/"}>Whatsapp</Link>
            </div>
            <div>
              <Link href={"/"}>Instagram</Link>
            </div>
          </div>
        </div>
        <div className="text-9xl">
          <CiCoffeeBean />
        </div>
      </section>
    </article>
  );
}
