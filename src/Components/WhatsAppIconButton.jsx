import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIconButton = () => {
  const whatsappLink = "https://wa.me/917715940337?text=Hello%21";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-6 z-50 bg-green-600 hover:bg-green-600 text-white p-2 rounded-full shadow-lg animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppIconButton;
