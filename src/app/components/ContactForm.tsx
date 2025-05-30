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

    // try {
    //   const result = await emailjs.send(
    //     "service_41u5nb3",
    //     "template_1jp9jup",
    //     {
    //       name: formData.name,
    //     },
    //     "rvxuQ4n9szGCWTyHr"
    //   );

    //   console.log("SUCCESS!", result.status, result.text);
    //   setStatus("Повідомлення надіслано!");
    //   setFormData({
    //     name: "",
    //     consentInfo: false,
    //     consentPolicy: false,
    //   });
    // } catch (error) {
    //   console.error("FAILED...", error);
    //   setStatus("Помилка при надсиланні. Спробуйте ще раз.");
    // }
  };

  return (
    <section className="container relative py-12 overflow-hidden mt-[70px] sm:mt-[100px] md:mt-[183px]">
      <h1 className="text-4xl sm:text-[56px] font-regular font-dm text-center mb-8 text-[#222222]">
        Do you have any questions
        <br />
        or suggestions?{" "}
      </h1>
      <div className="relative bg-white shadow-md rounded-xl z-10 w-full sm:max-w-[480px] sm:h-[601px] mr-auto px-4">
        <h3 className="text-2xl sm:text-[30px] font-medium font-dm text-center mb-3 text-[#222222]">
          Leave a request{" "}
        </h3>
        <p className="text-base sm:text-lg font-medium font-dm text-center mb-3 text-[#222222]">
          Managers will contact you and advise on all issues{" "}
        </p>
        <form
          onSubmit={handleSubmit}
          className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-[14px] sm:text-[16px] font-bold font-inter mb-2 text-[#222222]">
              What is your name?{" "}
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Please enter your name"
              required
              className="w-full border text-[14px] sm:text-[16px] font-regular font-inter border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-2 text-sm sm:text-[14px]">
            <label className="flex items-start gap-2 text-[#222222]">
              <input
                type="checkbox"
                name="consentInfo"
                checked={formData.consentInfo}
                onChange={handleChange}
              />
              I agree to the processing of my personal data in accordance with
              the conditions{" "}
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className={`px-[40px] ${
                isValid
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              <Image
                src="/assets/button.png"
                alt="book now"
                width={200}
                height={150}
                className="absolute bottom-0 right-0 w-[334px] h-auto object-contain pointer-events-none"
              />{" "}
            </button>
          </div>

          {status && (
            <div className="sm:col-span-2 text-center mt-4">
              <p className="text-sm font-semibold">{status}</p>
            </div>
          )}
        </form>
      </div>
      <Image
        src="/assets/bottom.png"
        alt="bottom Line"
        width={200}
        height={150}
        className="absolute bottom-0 right-0 w-full h-auto object-contain pointer-events-none"
      />
    </section>
  );
}
