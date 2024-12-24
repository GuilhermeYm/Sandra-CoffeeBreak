import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function AboutUsComponent() {
  return (
    <article
      className="w-full bg-backgroundMainTwo text-white flex flex-col xl:flex-row gap-16 py-8 xl:px-3"
      id="aboutUs"
    >
      <div className="relative basis-1/2 xl:ml-5 flex flex-1 justify-center px-3 xl:px-3">
        <Image
          src={"/images/Café 1.png"}
          alt="Imagem de um café com borda, e com o fundo desfocado"
          width={512}
          height={418}
        />
        <div className="absolute top-10 left-14 xl:top-20 xl:left-20 2xl:top-[110px]">
          <h2 className=" text-8xl font-extrabold tracking-[8px]">Sobre nós</h2>
        </div>
      </div>
      <div className="flex w-fit mx-4 xl:mr-9 shrink">
        <p className="2xl:text-5xl xl:text-4xl text-center tracking-widest !leading-[60px] w-fit xl:w-full">
          Somos um buffet que trabalha em família, com foco no conforto e no bom
          sabor. Nossa equipe está sempre pronta para atender e garantir que os
          clientes se sintam acolhidos e plenamente satisfeitos.
        </p>
      </div>
    </article>
  );
}
