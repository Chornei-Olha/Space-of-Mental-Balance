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
      className="container relative py-12 overflow-hidden mt-[70px] sm:mt-[100px] md:mt-[183px] text-center"
    >
      <h1 className="text-3xl sm:text-[56px] font-regular font-dm text-center mb-8 text-[#222222]">
        Do you have any questions
        <br />
        or suggestions?
      </h1>

      <div className="w-[80%] sm:max-w-[480px] shadow-md rounded-xl z-10 px-4 py-10 border-7 border-white/50 mb-[50px] mx-auto sm:ml-[10%]">
        <h3 className="text-2xl sm:text-[30px] font-medium font-dm text-center mb-3 text-[#222222]">
          Leave a request
        </h3>
        <p className="text-base sm:text-lg font-medium font-dm text-center mb-3 text-[#222222]">
          Managers will contact you and advise on all issues
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          {/* <div>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Please enter your name"
              required
              className="w-full border text-[14px] sm:text-[16px] font-regular font-inter border-gray-300 rounded px-4 py-2"
            />
          </div> */}
          <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2">
            {/* Иконка телефона */}
            <div className="flex items-center justify-center bg-[#E7C2A3] rounded-full w-10 h-10 mr-4">
              <Image
                src="/assets/phone.svg"
                alt="Phone"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            {/* Поле для ввода телефона */}
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
              />{" "}
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
        className="absolute bottom-0 w-full h-auto object-contain pointer-events-none"
      />
    </section>
  );
}
