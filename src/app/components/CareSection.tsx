import Image from "next/image";

export default function CareSection() {
  return (
    <section id="about" className="w-full px-4 md:px-16 lg:px-24 py-7 bg-white">
      <p className="text-black text-[12px] pb-[16px]">Über uns</p>
      {/* Заголовок */}
      <h2 className="text-center md:text-left lg:text-left text-[18px] md:text-[30px] lg:text-[40px] mb-6 text-black">
        Suchen Sie nette, fleißige, erfahrene Betreuerinnen für Ihre Eltern? Wir
        bieten häusliche 24 Stunden Seniorenbetreuung und Haushalte in
        Österreich und Deutschland.{" "}
      </h2>

      {/* Контейнер для картинки и текста */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center md:items-start gap-6">
        {/* Изображение (слева на десктопе, сверху на мобилке) */}
        <div className="w-full md:w-[70%] rounded-2xl overflow-hidden">
          <Image
            src="/assets/hearts.png"
            alt="Betreuung"
            width={429}
            height={267}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Текст (справа на десктопе, под фото на мобилке) */}
        <div className="text-[16px] w-[90%] md:w-[90%] lg:w-full leading-[18.78px] font-normal font-['YasnoRaleway'] text-black">
          <p className="mb-6">
            Mit dem Alter benötigen Menschen mehr Aufmerksamkeit, Fürsorge und
            Unterstützung. Eine gute Betreuung sorgt nicht nur für Komfort im
            Alltag, sondern trägt auch zur körperlichen und emotionalen
            Gesundheit bei.
          </p>
          <p className="mb-6">
            Sicherheit und Gesundheit – Unterstützung bei der
            Medikamenteneinnahme, Hilfe bei der Mobilität, Pflege des
            Gesundheitszustands.
          </p>
          <p className="mb-6">
            Emotionale Unterstützung – Gespräche, Spaziergänge, Schaffung einer
            warmen und vertrauensvollen Atmosphäre.
          </p>
          <p className="mb-6">
            Lebensqualität – Hilfe im Haushalt, Zubereitung von Mahlzeiten,
            Unterstützung bei Sauberkeit und Hygiene.
          </p>
          <p className="mb-6">
            Eine liebevolle Betreuung ist nicht nur Hilfe, sondern auch eine
            Möglichkeit, Ihren Angehörigen Ruhe, Freude und das Gefühl der
            Wertschätzung zu schenken.
          </p>
        </div>
      </div>
    </section>
  );
}
