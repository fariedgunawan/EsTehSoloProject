import Navbar from "../Element/Navbar";
import React, { useEffect } from "react";
import kisahsukses from "../assets/kisahsukses.png";
import bundle1 from "../assets/bundle1.png";
import bundle2 from "../assets/bundle2.png";
import bundle3 from "../assets/bundle3.png";
import bundle4 from "../assets/bundle4.png";
import roi from "../assets/roi.jpg";

const Franchise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="franchise-body bg-white min-h-screen font-epilogue text-black">
      <div className="franchise-heading bg-[#276631]">
        <Navbar />
      </div>
      <div className="franchise-container px-[35px]">
        <div className="franchise-content flex flex-col items-center sm:flex-row sm:justify-between sm:gap-[100px] sm:mt-[40px]">
          <div className="franchise-img">
            <img src={kisahsukses} className="w-[350px] sm:w-[950px] mt-[20px] sm:mt-0" alt="" />
          </div>
          <div className="franchise-caption flex flex-col items-center mt-[20px] sm:mt-0 sm:items-start">
            <h2 className="text-[18px] font-bold sm:text-[30px]">Mulai Cerita Suksesmu Dengan Kami!</h2>
            <h2 className="text-center mt-[10px] sm:text-justify sm:text-[20px] sm:mt-[40px] ">
              Bagi kami, kamu pantas untuk menyajikan teh terbaik untuk konsumen yang terbaik. Jadilah bagian dari mitra sukses kami. Bergabunglah dengan kami, dalam menyajikan es teh berkualitas untuk Indonesia.
            </h2>
            <h2 className="text-center mt-[20px] sm:text-justify sm:text-[20px]">Kami menawarkan paket usaha es teh lengkap, sekali bayar langsung bisa berjualan ditambah dengan video SOP untuk menjaga cita rasa Es Teh S.O.L.O.</h2>
            <h2 className="text-center mt-[20px] sm:text-justify sm:text-[20px]">
              Perlengkapan yang akan kamu dapatkan: 1 set <span className="italic">booth</span> lengkap, <span className="italic">box drink jar</span>, <span className="italic">kettle</span> (ceret), teko listrik, timbangan digital, gelas
              takar, gelas
              <span className="italic"> stainless</span>, wadah sedotan, toples, saringan teh, spatula kayu, sendok <span className="italic">stainless</span>, dan lainnya.
            </h2>
          </div>
        </div>
        <h2 className="text-center mt-[30px] text-[20px] sm:text-[30px] font-bold sm:mt-[100px]">Paket Booth</h2>
        <div className="content-slider flex justify-center mt-[30px] flex-col items-center sm:mt-[100px]">
          <div className="scrollbar-hide overflow-x-scroll flex w-full no-scrollbar text-white font-epilogue font-semibold sm:pb-[25px] cursor-pointer gap-[40px]">
            <div className="content-1 relative flex w-[435px] min-w-[435px] flex-col items-center overflow-hidden">
              <img src={bundle1} className="w-96 h-auto min-w-[100px] " alt="Esteh Manis" />
            </div>
            <div className="content-1 relative flex w-[435px] min-w-[435px] flex-col items-center overflow-hidden">
              <img src={bundle2} className="w-96 h-auto min-w-[100px]" alt="Esteh Manis" />
            </div>
            <div className="content-1 relative flex w-[435px] min-w-[435px] flex-col items-center overflow-hidden">
              <img src={bundle3} className="w-96 h-auto min-w-[100px]" alt="Esteh Manis" />
            </div>
            <div className="content-1 relative flex w-[435px] min-w-[435px] flex-col items-center overflow-hidden">
              <img src={bundle4} className="w-96 h-auto min-w-[100px]" alt="Esteh Manis" />
            </div>
          </div>
          <button className="btn text-[#075E54] sm:text-[20px]  px-[15px] py-[10px] rounded-lg shadow-lg mt-[40px] bg-white border-0 hover:text-white hover:bg-[#075E54]">Visit WhatsApp</button>
        </div>
        <h2 className="mt-[50px] text-center font-bold text-[20px] sm:text-[30px] italic">Return of Investment (R.O.I)</h2>
        <div className="franchise-table flex justify-center">
          <img src={roi} className="w-[600px]" alt="" />
        </div>

        <div className="franchise-contact flex items-center flex-col pb-[20px]">
          <h2 className="text-[20px] font-semibold sm:text-[30px]">Contact Us:</h2>
          <h2 className="font-semibold mt-[20px] sm:text-[30px]">Es Teh S.O.L.O</h2>
          <h2 className="font-semibold sm:text-[20px]">ES TEH SOLO JAWA TENGAH - JAWA TIMUR</h2>
          <h2 className="sm:text-[20px]">+62813 2882 7224</h2>
          <h2 className="font-semibold sm:text-[20px]">ES TEH SOLO JABODETABEK - LUAR JAWA</h2>
          <h2 className="sm:text-[20px]">+62812 1535 9043</h2>
          <h2 className="font-semibold sm:text-[20px]">WHATSAPP</h2>
          <h2 className="sm:text-[20px]">+62 822-2057-5308</h2>
          <h2 className="font-semibold sm:text-[20px]">INSTAGRAM</h2>
          <h2 className="sm:text-[20px]">@estehsolo_</h2>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
