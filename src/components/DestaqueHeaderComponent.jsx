import { Inria_Serif } from "next/font/google";

const inria = Inria_Serif({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

export default function DestaqueHeaderComponent() {
  return (
    <section className=" py-2 px-3 xl:py-16 xl:px-20">
      <h2 className="font-extrabold text-5xl mb-2">Destaque</h2>
      <p
        className={`text-3xl xl:text-4xl ${inria.className} w-full xl:w-[500px] leading-10`}
      >
        Cozinhamos com amor. Montamos lindos pratos, criamos sabores refinados,
        servimos com elegância e transformamos cada refeição em uma experiência
        inesquecível
      </p>
    </section>
  );
}
