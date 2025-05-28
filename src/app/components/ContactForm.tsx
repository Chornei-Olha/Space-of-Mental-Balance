"use client";

import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

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

    try {
      const result = await emailjs.send(
        "service_41u5nb3",
        "template_1jp9jup",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rvxuQ4n9szGCWTyHr"
      );

      console.log("SUCCESS!", result.status, result.text);
      setStatus("Повідомлення надіслано!");
      setFormData({
        name: "",
        email: "",
        message: "",
        consentInfo: false,
        consentPolicy: false,
      });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("Помилка при надсиланні. Спробуйте ще раз.");
    }
  };

  return (
    <section className="w-90% relative py-12 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/form.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 w-full sm:max-w-[1074px] mx-auto px-4">
        <h2 className="text-[40px] sm:text-[56px] font-medium font-dm text-center mb-8 text-[#222222]">
          Leave a request{" "}
        </h2>
        <h3 className="sm:text-base  md:text-lg font-medium font-dm text-center mb-8 text-[#222222]">
          Managers will contact you and advise on all issues{" "}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
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

          <div>
            <label className="block text-[14px] sm:text-[16px] font-bold font-inter mb-2 text-[#222222]">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address..."
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
            {/* <label className="flex items-start gap-2 text-[#222222]">
              <input
                type="checkbox"
                name="consentPolicy"
                checked={formData.consentPolicy}
                onChange={handleChange}
              />
              I agree to the privacy policy{" "}
            </label> */}
          </div>

          <div className="sm:col-span-2 text-right">
            <button
              type="submit"
              disabled={!isValid}
              className={`px-[40px] py-[10px] font-bold font-inter text-[14px] sm:text-[16px] rounded-3xl ${
                isValid
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Book now
            </button>
          </div>

          {status && (
            <div className="sm:col-span-2 text-center mt-4">
              <p className="text-sm font-semibold">{status}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
