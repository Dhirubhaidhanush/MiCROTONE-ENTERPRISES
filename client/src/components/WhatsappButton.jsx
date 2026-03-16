import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "917305419024";
  const message =
    "Hello, I visited Microtone website and need details about your products.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">

      {/* Heartbeat Glow */}
      <span className="absolute w-16 h-16 rounded-full bg-white animate-ping animation-duration-[2.5s]"></span>
      <span className="absolute w-16 h-16 rounded-full bg-white animate-ping animation-duration-[2.5s] [animation-delay:1.2s]"></span>

      {/* Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16
        rounded-full bg-blue-900 text-white
        shadow-lg hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  );
};

export default WhatsappButton;
