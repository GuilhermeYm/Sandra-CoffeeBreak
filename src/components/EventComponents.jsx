import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function EventComponents() {
  return (
    <article className="bg-backgroundMainOne w-full grid xl:grid-cols-[1fr_3fr] xl:h-[450px] gap-36 text-white px-0 xl:px-9 py-4">
      <div className="flex flex-col gap-2 xl:gap-10 xl:my-auto px-12">
        <h2
          className={`${montserrat.className} text-5xl 2xl:text-8xl xl:text-6xl leading-[110px] font-extrabold w-fit`}
        >
          Eventos
        </h2>
        <p
          className={`${montserrat.className} text-5xl 2xl:text-8xl xl:text-6xl font-extrabold w-fit`}
        >
          Realizados
        </p>
      </div>
      <div className="my-auto gap-10 xl:gap-28 w-full flex flex-col xl:flex-row items-center xl:items-start">
        <section className="rounded-3xl max-w-96 basis-4/5 xl:basis-1/2 bg-backgroundSectioMainOne">
          <Image
            src={"/images/EventoDoPadre.png"}
            alt="Imagens do evento do padre"
            width={524}
            height={200}
            className="rounded-3xl"
          />
          <article className="flex flex-wrap py-5 px-7 gap-5">
            <h2 className={` ${montserrat.className} font-extrabold text-4xl`}>
              Coffee na Igreja São João
            </h2>
            <p className={` ${montserrat.className} italic text-sm`}>
              Data da realização: 16/12/2024
            </p>
          </article>
        </section>
        <section className="rounded-3xl max-w-96 basis-4/5 xl:basis-1/2 bg-backgroundSectioMainOne">
          <Image
            src={"/images/EventoDaColorVisão.png"}
            alt="Imagens do evento do padre"
            width={524}
            height={200}
            className="rounded-3xl"
          />
          <article className="flex flex-wrap py-5 px-7 gap-5">
            <h2 className={` ${montserrat.className} font-extrabold text-4xl`}>
              Coffee na Color Visão
            </h2>
            <p className={` ${montserrat.className} italic text-sm`}>
              Data da realização: 16/12/2024
            </p>
          </article>
        </section>
      </div>
    </article>
  );
}
