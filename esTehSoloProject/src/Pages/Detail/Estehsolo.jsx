import Navbar from "../../Element/Navbar";
import React, { useEffect } from "react";
import estehsolo from "../../assets/tehsolo.png";
import gbestehsolo from "../../assets/gbestehsolo.png";
import ScrollBrand from "../../Element/ScrollBrand";
import BottomBar from "../../Element/BottomBar";
const Estehsolo = () => {
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
          <img src={estehsolo} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="caption flex-col flex items-center sm:items-start">
            <h2 className="text-[20px] font-semibold sm:text-[30px]">Es Teh S.O.L.O (2021)</h2>
            <h2 className="text-center mt-[20px] sm:text-left sm:text-[20px]">
              Es Teh S.O.L.O mengusung tema unik yang berakar pada tahun 1968, yakni "Bermula dari tradisi, terus menguatkan eksistensi. Wangi, sepet, legi, kentel <span className="italic">'Wasgitel'</span> adalah rasa khasnya. Untuk
              kesegaran es teh yang otentik. Dari dulu, kini, dan nanti."
            </h2>
          </div>
        </div>
        <div className="gerobak mt-[60px] flex flex-col items-center sm:mt-[30px]">
          <img src={gbestehsolo} className="w-[350px] sm:w-[450px]" alt="" />
          <h2 className="text-center mt-[20px] sm:w-[1000px] sm:text-[20px] sm:mt-[30px]">
            Kami mengundang Anda untuk bergabung dan menikmati cita rasa Es Teh S.O.L.O yang nikmat. Jadilah bagian dari cerita kami dan nikmati kenikmatan yang tersaji dalam setiap tegukan Es Teh S.O.L.O. Komitmen perusahaan kami adalah
            untuk berbagi kekayaan rasa warisan Solo kepada para pecinta teh di seluruh Indonesia.
          </h2>
          <div className="contact flex flex-col items-center mt-[40px] sm:mt-[60px]">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Contact</h2>
            <h2 className="mt-[10px] sm:text-[20px]">0821-4372-6717 (Jawa Tengah - Jawa Timur)</h2>
            <h2 className="sm:text-[20px]">0812-2685-7552 (JABODETABEK - Luar Jawa)</h2>
            <h2 className="sm:text-[20px]">Website : https://www.estehsolo.com/</h2>
            <h2 className="sm:text-[20px]">Instagram : @estehsolo_</h2>
          </div>
        </div>

        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[60px] sm:text-[30px] sm:mt-[130px]">Brand Lainnya</h2>
        <ScrollBrand />
      </div>
      <BottomBar />
    </div>
  );
};

export default Estehsolo;
