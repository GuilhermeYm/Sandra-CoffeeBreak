import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function EventComponents() {
  return (
    <article className="bg-backgroundMainOne w-full flex h-[450px] gap-36 text-white px-9">
      <div className="flex flex-col gap-10 my-auto">
        <h2
          className={`${montserrat.className} 2xl:text-8xl xl:text-6xl leading-[110px] font-extrabold`}
        >
          Eventos
        </h2>
        <p className={`${montserrat.className} 2xl:text-8xl xl:text-6xl font-extrabold`}>
          Realizados
        </p>
      </div>
      <div className="my-auto gap-28 w-full flex">
        <section className="rounded-3xl basis-1/2 bg-backgroundSectioMainOne">
          <article className="flex flex-wrap py-5 px-7">
            <h2 className={` ${montserrat.className} font-extrabold text-4xl`}>
              Coffee na Igreja São João
            </h2>
          </article>
        </section>
        <section className="rounded-3xl basis-1/2 bg-backgroundSectioMainOne">
          <article className="flex flex-wrap py-5 px-7">
            <h2 className={` ${montserrat.className} font-extrabold text-4xl`}>
              Coffee na Color Visão
            </h2>
          </article>
        </section>
      </div>
    </article>
  );
}
