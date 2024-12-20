import { Montserrat } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function ImagesHeaderComponents() {
  return (
    <section>
      <h2>Fotos</h2>
      <Carousel>
        <CarouselContent>
            <CarouselItem></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
