// "use client";

// import emailjs from "@emailjs/browser";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     consentInfo: false,
//     consentPolicy: false,
//   });

//   const [status, setStatus] = useState<string | null>(null);

//   const isValid = formData.consentInfo && formData.consentPolicy;

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const isCheckbox = type === "checkbox";

//     setFormData((prev) => ({
//       ...prev,
//       [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
//     }));
//   };

//   useEffect(() => {
//     emailjs.init("service_hqwpr5u");
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!isValid) {
//       setStatus("Please confirm your consent");
//       return;
//     }

//     setStatus("Send your email...");
//     // Твой emailjs код
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-10 w-full mt-[70px] sm:mt-[100px] md:mt-[183px] text-center overflow-hidden"
//     >
//       {/* Flowers */}
//       <div className="absolute bottom-0 left-[-10px] sm:left-0 z-20 h-[auto] w-[150px] sm:w-[200px] md:w-[272px]">
//         <Image
//           src="/assets/flowers.png"
//           alt="Flowers"
//           width={300}
//           height={300}
//           className="absolute bottom-0 left-0 w-auto h-auto z-0"
//         />
//       </div>
//       {/* Girl */}
//       <div className="absolute bottom-0 right-[-60px] sm:right-[200px] z-60 h-[auto] w-[240px] sm:w-[300px] md:w-[450px] lg:w-[550px]">
//         <Image
//           src="/assets/girl.png"
//           alt="Girl"
//           width={250}
//           height={250}
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-auto z-0"
//         />
//       </div>
//       {/* Cup */}
//       <div className="absolute top-[120px] sm:top-0 right-0 z-0 h-[auto] w-[50px] sm:w-[130px] md:w-[200px]">
//         <Image
//           src="/assets/cup.png"
//           alt="Cup"
//           width={200}
//           height={200}
//           className="absolute top-0 right-0 w-auto h-auto z-0"
//         />
//       </div>
//       {/* Ribbon2 */}
//       <div className="absolute top-[150px] left-0 sm:left-[145px] z-51 h-[auto] w-[100px] sm:w-[120px] md:w-[200px]">
//         <Image
//           src="/assets/ribbon2.png"
//           alt="ribbon"
//           width={200}
//           height={200}
//           className="absolute top-0 right-0 w-auto h-auto z-0"
//         />
//       </div>

//       {/* Заголовок */}
//       <h1
//         className={`text-3xl sm:text-[56px] font-dm text-center mb-8 text-[#222222] relative z-10 pb-15 font-normal ${poppins.className}`}
//       >
//         Do you have any questions
//         <br />
//         or suggestions?
//       </h1>
//       <div className="z-[50] w-[80%] sm:max-w-[480px] shadow-md rounded-xl px-4 py-10 border-7 border-white/50 mb-[150px] sm:mb-[50px] mx-auto sm:ml-[16%] bg-white relative">
//         {/* Flower2 */}
//         <div className="absolute top-[-100px] left-[50%] z-55 h-[auto] w-[50px] sm:w-[60px] md:w-[70px]">
//           <Image
//             src="/assets/flower2.png"
//             alt="flower"
//             width={200}
//             height={200}
//             className="absolute top-0 right-0 w-auto h-auto z-0"
//           />
//         </div>
//         {/* Flower2.2 */}
//         <div className="absolute top-[80px] right-[-70px] z-55 h-[auto] w-[70px] sm:w-[80px] md:w-[97px]">
//           <Image
//             src="/assets/flower2.2.png"
//             alt="flower"
//             width={200}
//             height={200}
//             className="absolute top-0 right-0 w-auto h-auto z-0"
//           />
//         </div>
//         <h3
//           className={`text-2xl sm:text-[30px] font-dm text-center mb-3 text-[#222222] font-medium ${poppins.className}`}
//         >
//           Leave a request
//         </h3>
//         <p
//           className={`text-base sm:text-lg font-dm text-center mb-3 text-[#222222] font-normal ${poppins.className}`}
//         >
//           Managers will contact you and advise on all issues
//         </p>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 ">
//           <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2">
//             <div className="flex items-center justify-center bg-[#E7C2A3] rounded-full w-10 h-10 mr-4">
//               <Image
//                 src="/assets/phone.svg"
//                 alt="Phone"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//             </div>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="+447 (___) ___ - __ - __"
//               className="w-full text-[#4A4A4A] text-base font-inter outline-none"
//             />
//           </div>

//           <div>
//             <button type="submit" disabled={!isValid}>
//               <Image
//                 src="/assets/button.png"
//                 alt="book now"
//                 width={200}
//                 height={150}
//                 className="w-[334px] h-auto object-contain cursor-pointer"
//               />
//             </button>
//           </div>

//           <div className="flex flex-col text-sm sm:text-[14px]">
//             <label
//               className={`flex items-start text-[#222222] font-normal ${poppins.className}`}
//             >
//               <input
//                 type="checkbox"
//                 name="consentInfo"
//                 checked={formData.consentInfo}
//                 onChange={handleChange}
//               />
//               I agree to the processing of my personal data in accordance with
//               the conditions
//             </label>
//           </div>

//           {status && (
//             <div className="text-center mt-4">
//               <p className="text-sm font-semibold">{status}</p>
//             </div>
//           )}
//         </form>
//       </div>
//       {/* Нижняя декоративная линия */}
//       <Image
//         src="/assets/bottom.png"
//         alt="bottom Line"
//         width={200}
//         height={150}
//         className="absolute bottom-0 w-full h-auto object-contain pointer-events-none z-0"
//       />
//     </section>
//   );
// }
"use client";

import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
    consentInfo: false,
    consentPolicy: false,
  });

  const [status, setStatus] = useState<string | null>(null);

  const isValid = formData.consentInfo;

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
    emailjs.init("SHxYArFhRRKMVWv7L"); // замените на ваш PUBLIC KEY
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid) {
      setStatus("Please confirm your consent");
      return;
    }

    setStatus("Sending your email...");

    try {
      await emailjs.send(
        "service_hqwpr5u", // ваш Service ID
        "template_edgm3bn", // ваш Template ID
        {
          name: formData.name,
          phone: formData.phone,
        }
      );
      setStatus("Email sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        comment: "",
        consentInfo: false,
        consentPolicy: false,
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email.");
    }
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
      <div className="absolute bottom-0 right-[-60px] sm:right-[200px] z-60 h-[auto] w-[240px] sm:w-[300px] md:w-[450px] lg:w-[550px]">
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

      {/* Заголовок */}
      <h1
        className={`text-3xl sm:text-[56px] font-dm text-center mb-8 text-[#222222] relative z-10 pb-15 font-normal ${poppins.className}`}
      >
        Do you have any questions
        <br />
        or suggestions?
      </h1>
      <div className="z-[50] w-[80%] sm:max-w-[480px] shadow-md rounded-xl px-4 py-10 border-7 border-white/50 mb-[150px] sm:mb-[50px] mx-auto sm:ml-[16%] bg-white relative">
        {/* Flower2 */}
        <div className="absolute top-[-100px] left-[50%] z-55 h-[auto] w-[50px] sm:w-[60px] md:w-[70px]">
          <Image
            src="/assets/flower2.png"
            alt="flower"
            width={200}
            height={200}
            className="absolute top-0 right-0 w-auto h-auto z-0"
          />
        </div>
        {/* Flower2.2 */}
        <div className="absolute top-[80px] right-[-70px] z-55 h-[auto] w-[70px] sm:w-[80px] md:w-[97px]">
          <Image
            src="/assets/flower2.2.png"
            alt="flower"
            width={200}
            height={200}
            className="absolute top-0 right-0 w-auto h-auto z-0"
          />
        </div>
        <h3
          className={`text-2xl sm:text-[30px] font-dm text-center mb-3 text-[#222222] font-medium ${poppins.className}`}
        >
          Leave a request
        </h3>
        <p
          className={`text-base sm:text-lg font-dm text-center mb-3 text-[#222222] font-normal ${poppins.className}`}
        >
          Managers will contact you and advise on all issues
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          {/* Name Field */}
          <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2">
            <div className="flex items-center justify-center bg-[#E7C2A3] rounded-full w-10 h-10 mr-4">
              <Image
                src="/assets/user.png"
                alt="User"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              maxLength={50}
              className="w-full text-[#4A4A4A] text-base font-inter outline-none"
              required
            />
          </div>

          {/* Phone Field */}
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
              value={formData.phone}
              onChange={handleChange}
              maxLength={20}
              className="w-full text-[#4A4A4A] text-base font-inter outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2">
            <div className="flex items-center justify-center bg-[#E7C2A3] rounded-full w-10 h-10 mr-4">
              <Image
                src="/assets/email.png"
                alt="email"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              maxLength={20}
              className="w-full text-[#4A4A4A] text-base font-inter outline-none"
              required
            />
          </div>

          {/* Comment Field */}
          <div className="flex items-start bg-white rounded-lg shadow-md px-4 py-2">
            <div className="flex items-center justify-center bg-[#E7C2A3] rounded-full w-10 h-10 mr-4 mt-1">
              <Image
                src="/assets/comment.png"
                alt="comment"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              maxLength={500}
              rows={4}
              className="w-full text-[#4A4A4A] text-base font-inter outline-none resize-none"
              required
            />
          </div>

          {/* Submit */}
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

          {/* Consent */}
          <div className="flex flex-col text-sm sm:text-[14px]">
            <label
              className={`flex items-start text-[#222222] font-normal ${poppins.className}`}
            >
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
