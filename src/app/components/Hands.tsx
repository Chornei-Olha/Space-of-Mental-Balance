import Image from "next/image";

export default function FullWidthImage() {
  return (
    <section className="w-full flex justify-center py-2">
      <div className="w-full md:w-[50%]">
        <Image
          src="/assets/hands.jpg" // Замените на нужный путь
          alt="Example"
          width={1920} // Максимальная ширина для десктопа
          height={1080} // Пропорции изображения
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
