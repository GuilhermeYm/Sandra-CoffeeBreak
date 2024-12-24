import Image from "next/image";
import { Badge } from "./ui/badge";

export default function ShowTheBestProducts() {
  return (
    <article className="flex flex-col xl:flex-row flex-wrap bg-backgroundMainThree py-5 px-10 xl:py-16 xl:px-24 w-full text-black items-center gap-24 justify-center">
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        <div className="w-full max-h-[181px] overflow-hidden relative">
          <Image
            src={"/images/MelhoresProdutos/quicheDeAlhoPoró.jpg"}
            alt="Quiche de alho poró"
            width={440}
            height={202}
            className="rounded-3xl 2xl:w-full"
          />
        </div>
        <div className="py-3 px-6 flex flex-col justify-end h-full ">
          <div className="gap-4 flex flex-col">
            <h2 className="w-11/12 text-5xl font-extrabold tracking-wider">
              Quiche de Alho Poró
            </h2>
            <p className="text-2xl">
              Uma torta deliciosa de alho poró, na qual, participa do recheio. A
              massa também é deleciosa, e na parte de cima, temos queijo.
            </p>
          </div>
          <div className="flex gap-3 mt-4 mb-3 items-center justify-start">
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Alho Poró
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Torta
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Queijo
            </Badge>
          </div>
        </div>
      </section>
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        <div className="w-full max-h-[181px] overflow-hidden relative">
          <Image
            src={"/images/MelhoresProdutos/tortaDeFrango.jpg"}
            alt="Torta de frango"
            width={440}
            height={202}
            className="rounded-3xl 2xl:w-full"
          />
        </div>
        <div className="py-3 px-6 flex flex-col justify-end h-full">
          <div className="gap-4 flex flex-col">
            <h2 className="w-11/12 text-5xl font-extrabold tracking-wider">
              Torta de Frango
            </h2>
            <p className="text-2xl">
              Uma delicosa torta de frango, no qual, apresenta uma massa
              douradinha e crocante, juntamente com uma camada grande de frango
            </p>
          </div>
          <div className="flex gap-3 mt-4 mb-3 items-center justify-start">
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Frango
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Torta
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Massa douradinha
            </Badge>
          </div>
        </div>
      </section>
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        <div className="w-full max-h-[181px] overflow-hidden relative">
          <Image
            src={"/images/MelhoresProdutos/ragu.jpeg"}
            alt="Macarrão com ragu"
            width={440}
            height={202}
            className="rounded-3xl 2xl:w-full"
          />
        </div>
        <div className="py-3 px-6 flex flex-col justify-end h-full ">
          <div className="gap-4 flex flex-col">
            <h2 className="w-11/12 text-5xl font-extrabold tracking-wider">
              Macarrão com ragu
            </h2>
            <p className="text-2xl">
              Macarrão, no qual, apresenta uma deliciosa calda de ragu, caracterizada pela carne moída, vegetais e tomates.
            </p>
          </div>
          <div className="flex gap-3 mt-4 mb-3 items-center justify-start">
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Macarrão
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Carne moída
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Vegetais
            </Badge>
          </div>
        </div>
      </section>
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        <div className="w-full max-h-[181px] overflow-hidden relative">
          <Image
            src={"/images/MelhoresProdutos/ragu.jpeg"}
            alt="Macarrão com ragu"
            width={440}
            height={202}
            className="rounded-3xl 2xl:w-full"
          />
        </div>
        <div className="py-3 px-6 flex flex-col justify-end h-full ">
          <div className="gap-4 flex flex-col">
            <h2 className="w-11/12 text-5xl font-extrabold tracking-wider">
              Macarrão com ragu
            </h2>
            <p className="text-2xl">
              Macarrão, no qual, apresenta uma deliciosa calda de ragu, caracterizada pela carne moída, vegetais e tomates.
            </p>
          </div>
          <div className="flex gap-3 mt-4 mb-3 items-center justify-start">
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Macarrão
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Carne moída
            </Badge>
            <Badge
              className={
                "bg-backgroundBadgeSectionMainThree text-black font-extrabold"
              }
            >
              Vegetais
            </Badge>
          </div>
        </div>
      </section>
    </article>
  );
}
