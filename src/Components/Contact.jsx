import React from "react";
import { FaInstagram, FaFacebookMessenger, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="w-[clamp(280px,90%,1000px)] mx-auto py-[clamp(2rem,5vw,4rem)] text-center bg-[#000435] rounded-xl shadow-lg mb-10">
      <p className="text-[#FFFFE0] text-[clamp(1rem,2vw,1.25rem)] mb-[clamp(1rem,2vw,2rem)]">
        Reach out to us through any of the platforms below:
      </p>
      <div className="flex justify-center flex-wrap gap-[clamp(1rem,3vw,4rem)]">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-[clamp(2rem,6vw,3rem)] hover:scale-110 transition-transform">
          <FaInstagram />
        </a>
        <a href="https://www.messenger.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-[clamp(2rem,6vw,3rem)] hover:scale-110 transition-transform">
          <FaFacebookMessenger />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-[clamp(2rem,6vw,3rem)] hover:scale-110 transition-transform">
          <FaFacebook />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-500 text-[clamp(2rem,6vw,3rem)] hover:scale-110 transition-transform">
          <FaWhatsapp />
        </a>
        <a href="mailto:raihan.a.amiree@gmail.com" className="text-yellow-300 text-[clamp(2rem,6vw,3rem)] hover:scale-110 transition-transform">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
