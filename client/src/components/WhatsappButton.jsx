import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "7305419024"; // replace
  const message =
    "Hello, I visited Microtone website and need details about your products.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 group">

      {/* Ripple Ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping"></span>

      {/* Main Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 
        rounded-full text-white
        bg-linear-to-br from-green-500 to-green-600
        shadow-lg shadow-green-500/40
        backdrop-blur-md
        hover:scale-110 hover:shadow-green-400/70
        transition-all duration-300"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 
        opacity-0 group-hover:opacity-100
        transition duration-300
        bg-gray-900 text-white text-sm px-3 py-1 rounded-md shadow-lg">
        Chat With Us
      </div>

    </div>
  );
};

export default WhatsappButton;
