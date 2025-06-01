"use client";

import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consentInfo: false,
    consentPolicy: false,
  });

  const [status, setStatus] = useState<string | null>(null);

  const isValid = formData.consentInfo && formData.consentPolicy;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  useEffect(() => {
    emailjs.init("achhP-nDveJIR5VOU");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid) {
      setStatus("Будь ласка, підтвердіть згоди.");
      return;
    }

    setStatus("Надсилаємо ваше повідомлення...");
    // Твой emailjs код
  };

  return (
    <section
      id="contact"
      className="relative py-10 w-full mt-[70px] sm:mt-[100px] md:mt-[183px] text-center overflow-hidden"
    >
      {/* Flowers */}
      <div className="absolute bottom-0 left-[-10px] sm:left-0 z-20 h-[auto] w-[150px] sm:w-[200px] md:w-[272px]">
        <Image
          src="/assets/flowers.png"
          alt="Flowers"
          width={300}
          height={300}
          className="absolute bottom-0 left-0 w-auto h-auto z-0"
        />
      </div>
      {/* Girl */}
      <div className="absolute bottom-0 right-[-60px] sm:right-[200px] z-60 h-[auto] w-[250px] sm:w-[300px] md:w-[450px] lg:w-[550px]">
        <Image
          src="/assets/girl.png"
          alt="Girl"
          width={250}
          height={250}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-auto z-0"
        />
      </div>
      {/* Cup */}
      <div className="absolute top-[120px] sm:top-0 right-0 z-0 h-[auto] w-[50px] sm:w-[130px] md:w-[200px]">
        <Image
          src="/assets/cup.png"
          alt="Cup"
          width={200}
          height={200}
          className="absolute top-0 right-0 w-auto h-auto z-0"
        />
      </div>
      {/* Ribbon2 */}
      <div className="absolute top-[150px] left-0 sm:left-[145px] z-51 h-[auto] w-[100px] sm:w-[120px] md:w-[200px]">
        <Image
          src="/assets/ribbon2.png"
          alt="ribbon"
          width={200}
          height={200}
          className="absolute top-0 right-0 w-auto h-auto z-0"
        />
      </div>
      {/* Flower2 */}f
      <div className="absolute top-[200px] left-[60%] md:left-[35%] z-55 h-[auto] w-[50px] sm:w-[60px] md:w-[70px]">
        <Image
          src="/assets/flower2.png"
          alt="flower"
          width={200}
          height={200}
          className="absolute top-0 right-0 w-auto h-auto z-0"
        />
      </div>
      {/* Flower2.2 */}
      <div className="absolute top-[300px] left-[80%] sm:left-[80%] md:left-[70%] lg:left-[47%] z-55 h-[auto] w-[70px] sm:w-[80px] md:w-[97px]">
        <Image
          src="/assets/flower2.2.png"
          alt="flower"
          width={200}
          height={200}
          className="absolute top-0 right-0 w-auto h-auto z-0"
        />
      </div>
      {/* Заголовок */}
      <h1 className="text-3xl sm:text-[56px] font-regular font-dm text-center mb-8 text-[#222222] relative z-10 pb-15">
        Do you have any questions
        <br />
        or suggestions?
      </h1>
      <div className="z-[50] w-[80%] sm:max-w-[480px] shadow-md rounded-xl px-4 py-10 border-7 border-white/50 mb-[150px] sm:mb-[50px] mx-auto sm:ml-[16%] bg-white relative">
        <h3 className="text-2xl sm:text-[30px] font-medium font-dm text-center mb-3 text-[#222222]">
          Leave a request
        </h3>
        <p className="text-base sm:text-lg font-medium font-dm text-center mb-3 text-[#222222]">
          Managers will contact you and advise on all issues
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 ">
          <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2">
            <div className="flex items-center justify-center bg-[#E7C2A3] rounded-full w-10 h-10 mr-4">
              <Image
                src="/assets/phone.svg"
                alt="Phone"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="+447 (___) ___ - __ - __"
              className="w-full text-[#4A4A4A] text-base font-inter outline-none"
            />
          </div>

          <div>
            <button type="submit" disabled={!isValid}>
              <Image
                src="/assets/button.png"
                alt="book now"
                width={200}
                height={150}
                className="w-[334px] h-auto object-contain cursor-pointer"
              />
            </button>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:text-[14px]">
            <label className="flex items-start gap-2 text-[#222222]">
              <input
                type="checkbox"
                name="consentInfo"
                checked={formData.consentInfo}
                onChange={handleChange}
              />
              I agree to the processing of my personal data in accordance with
              the conditions
            </label>
          </div>

          {status && (
            <div className="text-center mt-4">
              <p className="text-sm font-semibold">{status}</p>
            </div>
          )}
        </form>
      </div>
      {/* Нижняя декоративная линия */}
      <Image
        src="/assets/bottom.png"
        alt="bottom Line"
        width={200}
        height={150}
        className="absolute bottom-0 w-full h-auto object-contain pointer-events-none z-0"
      />
    </section>
  );
}
