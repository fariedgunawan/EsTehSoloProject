import Navbar from "../../Element/Navbar";
import React, { useEffect } from "react";
import kamudawet from "../../assets/kamudawet.png";
import gbkamudawet from "../../assets/gbkamudawet.png";
import ScrollBrand from "../../Element/ScrollBrand";
const Kamudawet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tentangkamu-body bg-white min-h-screen font-epilogue text-black">
      <div className="tentangkamu-head bg-[#276631]">
        <Navbar />
      </div>
      <div className="tentangkamu-container px-[35px]">
        <div className="company-caption flex flex-col items-center sm:flex-row sm:justify-between sm:gap-[100px]">
          <img src={kamudawet} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="caption flex-col flex items-center sm:items-start">
            <h2 className="text-[20px] font-semibold sm:text-[30px]">Kamu Dan Dawet (2020)</h2>
            <h2 className="text-center mt-[20px] sm:text-left sm:text-[20px]">
              Mengungsung konsep minuman tradisional Indonesia yang dikemas secara modern dan kekinian, untuk melestarikan budaya dan kekayaan Indonesia, kami bertekat untuk terus menjaga cita rasa ini serta kami akan terus
              memperkenalkannya ke seluruh daerah yang ada di Indonesia bahkan dunia.
            </h2>
          </div>
        </div>
        <div className="gerobak mt-[60px] flex flex-col items-center sm:mt-[30px]">
          <img src={gbkamudawet} className="w-[350px] sm:w-[450px]" alt="" />
          <h2 className="text-center mt-[20px] sm:w-[1000px] sm:text-[20px] sm:mt-[30px]">
            Dengan keyakinan dari mitra kami, kami terus bersemangat membantu seluruh mitra kami menggapai sukses bersama “Kamu dan Dawet”, dengan semangat dari mitra kami, dan arahan yang tepat dari team management kami. Banyak mitra kami
            dari seluruh Indonesia membagikan cerita suksesnya kepada kami. Mulai dari memiliki beberapa cabang outlet “Kamu dan Dawet”, hingga dapat membeli kendaraan dan rumah impian.
          </h2>
          <div className="contact flex flex-col items-center mt-[40px] sm:mt-[60px]">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Contact</h2>
            <h2 className="mt-[10px] sm:text-[20px]">0812-2782-0622</h2>
            <h2 className="sm:text-[20px]">Website : https://kamudawet.com/</h2>
            <h2 className="sm:text-[20px]">Instagram: @kamudawet</h2>
          </div>
        </div>

        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[60px] sm:text-[30px] sm:mt-[130px]">Brand Lainnya</h2>
        <ScrollBrand />
      </div>
    </div>
  );
};

export default Kamudawet;
