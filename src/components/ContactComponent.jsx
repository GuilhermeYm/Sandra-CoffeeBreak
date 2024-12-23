import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

export default function ContactComponent() {
  return (
    <article
      className={`py-20 flex justify-center ${montserrat.className} bg-backgroundMainFour text-white w-full px-44`}
    >
      <section className="rounded-[50px] py-12 bg-backgroundSectionMainFour flex flex-col items-center px-10 gap-8">
        <p className="text-7xl leading-[106px] font-extrabold text-center w-fit">
          Estamos disponíveis para fazer novos eventos
        </p>
        <h2 className="font-semibold text-6xl  text-center w-fit">
          Entre em contato conosco
        </h2>
        <div className="flex w-full items-center justify-center mt-9">
          <div className="border-r-[5px] border-white text-5xl pr-14 py-20 font-medium">
            Whatsapp
          </div>
          <div className="text-5xl pl-14 py-20 font-medium">Instagram</div>
        </div>
      </section>
    </article>
  );
}
