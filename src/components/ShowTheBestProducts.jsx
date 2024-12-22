import Image from "next/image";

export default function ShowTheBestProducts() {
  return (
    <article className="flex flex-wrap bg-backgroundMainThree py-16 px-24 gap-20 w-full text-black">
      <section className="flex bg-backgroundSectionMainThree basis-1/3 h-[500px] flex-col rounded-3xl">
        <div className="w-full h-[300px] overflow-hidden relative">
          <Image
            src={"/images/Melhores produtos/quicheDeAlhoPoró.jpg"}
            alt="Uma torta de alho poró"
            width={150}
            height={100}
            className="w-full absolute bottom-10"
          />
        </div>
        <div className="py-3 px-6">
          <div className="gap-5 flex-col">
            <h2 className="w-11/12 text-5xl font-extrabold tracking-wider">
              Quiche de Alho Poró
            </h2>
            <p className="text-2xl">
              Uma torta deliciosa de alho poró, na qual, participa do recheio. A
              massa também é deleciosa, e na parte de cima, temos queijo
            </p>
          </div>
          <div></div>
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
