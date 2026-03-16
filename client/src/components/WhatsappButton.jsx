import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "917305419024";
  const message =
    "Hello, I visited Microtone website and need details about your products.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const openWhatsapp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group flex items-center justify-center">

      {/* Heartbeat Glow */}
      <span
        className="absolute w-16 h-16 rounded-full bg-white/40 animate-ping"
        style={{ animationDuration: "2.5s" }}
      ></span>

      <span
        className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping"
        style={{ animationDuration: "2.5s", animationDelay: "1.2s" }}
      ></span>

      {/* Button */}
      <button
        onClick={openWhatsapp}
        className="relative flex items-center justify-center w-16 h-16
        rounded-full bg-blue-900 text-white cursor-pointer
        shadow-lg hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </button>

      {/* Tooltip */}
      <div
        className="absolute right-20 top-1/2 -translate-y-1/2
        opacity-0 group-hover:opacity-100
        transition duration-300
        bg-gray-900 text-white text-sm px-3 py-1 rounded-md shadow-lg whitespace-nowrap"
      >
        Chat with us
      </div>

    </div>
  );
};

export default WhatsappButton;
