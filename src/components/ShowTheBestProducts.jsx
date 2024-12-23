import Image from "next/image";
import { Badge } from "./ui/badge";

export default function ShowTheBestProducts() {
  return (
    <article className="flex flex-wrap bg-backgroundMainThree py-16 px-24 w-full text-black items-center gap-24 justify-center">
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        <div className="w-full h-[300px] overflow-hidden relative">
          <Image 
          src={"/images/Melhores produtos/quicheDeAlhoPoró.png"}
          alt="Quiche de alho poró"
          width={440}
          height={202}
          className="rounded-3xl 2xl:w-full"
          />
        </div>
        <div className="py-3 px-6">
          <div className="gap-10 flex-col">
            <h2 className="w-11/12 text-5xl font-extrabold tracking-wider">
              Quiche de Alho Poró
            </h2>
            <p className="text-2xl">
              Uma torta deliciosa de alho poró, na qual, participa do recheio. A
              massa também é deleciosa, e na parte de cima, temos queijo
            </p>
          </div>
          <div className="flex gap-3 mt-4 mb-3">
            <Badge className={"bg-backgroundBadgeSectionMainThree text-black font-extrabold"}>
              Alho Poró
            </Badge>
            <Badge className={"bg-backgroundBadgeSectionMainThree text-black font-extrabold"}>
              Torta
            </Badge>
            <Badge className={"bg-backgroundBadgeSectionMainThree text-black font-extrabold"}>
              Queijo
            </Badge>
          </div>
        </div>
      </section>
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        dsa
      </section>
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        dsa
      </section>
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        dsa
      </section>
    </article>
  );
}
