import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopupBanner = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg relative shadow-lg text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-center h-7 w-7 text-2xl"
        >
          &times;
        </button>
        <Image
          src="/web3conf.webp"
          alt="web3conf"
          width={600}
          height={300}
          className="rounded-lg"
        />
        <div className="mt-4">
          <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text">
            Hack Web3Conf India&apos;24!!!
          </p>
          <p className="text-lg text-gray-700">
            Let&apos;s dive into realms of Web3
          </p>

          <div className="mt-4 gap-5 flex max-md:flex-col w-full items-center mb-4 justify-center">
            <a
              className=""
              href="https://dorahacks.io/hackathon/hack-web3conf-24/detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="CTA-button-wob"
                data-aos="fade-down"
                className="bg-gradient-to-r from-[#00008B] to-[#85C6DC] text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:to-[#00008B] hover:from-[#85C6DC]"
              >
                Register Here
              </button>
            </a>
          </div>
          <p className="text-lg text-gray-700">
            To Be a part of Web3Conf&apos;24 <a
              className="text-[#50508E] hover:text-[#85C6DC] underline hover:no-underline hover:font-bold bg-none cursor-pointer hover:text-xl"
              href="https://www.web3confindia.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >Book Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
