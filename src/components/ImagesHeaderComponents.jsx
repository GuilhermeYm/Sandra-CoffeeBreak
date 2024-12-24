import { Montserrat } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function ImagesHeaderComponents() {
  return (
    <section className="flex flex-col py-5 px-3 xl:px-0 justify-center xl:justify-normal xl:py-16 flex-1 w-full">
      <h2 className={`${montserrat.className} text-5xl font-extrabold mb-3`}>
        Fotos
      </h2>
      <Carousel className="py-2 w-4/5 xl:w-full px-4">
        <CarouselContent>
          <CarouselItem className="basis-3/4 xl:basis-1/2 2xl:basis-1/3">
            <Image
              src={"/images/boloDeBanana.png"}
              alt="Bolo de banana"
              width={393}
              height={308}
              className="rounded-3xl"
            />
          </CarouselItem>
          <CarouselItem className="basis-3/4 xl:basis-1/2 2xl:basis-1/3">
            <Image
              src={"/images/papaiNoel.png"}
              alt="Bolo de banana"
              width={393}
              height={308}
              className="rounded-3xl"
            />
          </CarouselItem>
          <CarouselItem className="basis-3/4 xl:basis-1/2 2xl:basis-1/3">
            <Image
              src={"/images/pãodoce.png"}
              alt="Bolo de banana"
              width={393}
              height={308}
              className="rounded-3xl"
            />
          </CarouselItem>
          <CarouselItem className="basis-3/4 xl:basis-1/2 2xl:basis-1/3">
            <Image
              src={"/images/madeleine.jpg"}
              alt="Bolo de banana"
              width={393}
              height={308}
              className="rounded-3xl"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-[#8D614D] text-white p-2 rounded-full shadow-lg hover:text-zinc-200 border-none hover:bg-[#8D614D] hover:scale-110 transition-all duration-300 ease-linear" />
        <CarouselNext className="bg-[#8D614D] text-white p-2 rounded-full shadow-lg hover:text-zinc-200 hover:scale-110 transition-all duration-300 ease-linear border-none hover:bg-[#8D614D]" />
      </Carousel>
    </section>
  );
}
