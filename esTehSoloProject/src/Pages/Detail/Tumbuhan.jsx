import Navbar from "../../Element/Navbar";
import React, { useEffect } from "react";
import tumbuhan from "../../assets/tumbuhan.png";
import gbtumbuhan from "../../assets/gbtumbuhan.jpg";
import ScrollBrand from "../../Element/ScrollBrand";
import BottomBar from "../../Element/BottomBar";
import BottomBarBlack from "../../Element/BottomBarBlack";
const Tumbuhan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tentangkamu-body bg-white min-h-screen font-epilogue text-black">
      <div className="tentangkamu-head bg-black">
        <Navbar />
      </div>
      <div className="tentangkamu-container px-[35px]">
        <div className="company-caption flex flex-col items-center sm:flex-row sm:justify-between sm:gap-[100px]">
          <img src={tumbuhan} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="caption flex-col flex items-center sm:items-start">
            <h2 className="text-[20px] font-semibold sm:text-[30px]">Tumbuhan Smoothies (2021)</h2>
            <h2 className="text-center mt-[20px] sm:text-left sm:text-[20px]">
              Tumbuhan Smoothies adalah sebuah merek atau bisnis yang menawarkan <span className="italic">smoothies</span> yang terbuat dari buah-buah segar pilihan. Dengan makna dari tumbuhan sendiri ialah “Bertumbuh atas kehendak Tuhan”.
              Bertumbuh sukses bisnisnya, bertumbuh cuan mitranya!
            </h2>
          </div>
        </div>
        <div className="gerobak mt-[60px] flex flex-col items-center sm:mt-[30px]">
          <img src={gbtumbuhan} className="w-[350px] sm:w-[450px]" alt="" />
          <h2 className="text-center mt-[20px] sm:w-[1000px] sm:text-[20px] sm:mt-[30px]">
            Produk Tumbuhan Smoothies hadir dan dikemas untuk Anda yang ingin membuka peluang usaha kekinian dengan harga yang terjangkau dan desain yang menarik. Dengan rasa yang bervariasi, Tumbuhan Smoothies memberikan kualitas terbaik
            hanya untuk Anda.
          </h2>
          <div className="contact flex flex-col items-center mt-[40px] sm:mt-[60px]">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Contact</h2>
            <h2 className="mt-[10px] sm:text-[20px]">0821-2685-7553 (JABAR & JABODETABEK)</h2>
            <h2 className="sm:text-[20px]">Website : https://www.tumbuhansmoothies.com/</h2>
            <h2 className="sm:text-[20px]">Instagram : @tumbuhansmoothies</h2>
          </div>
        </div>

        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[60px] sm:text-[30px] sm:mt-[130px]">Brand Lainnya</h2>
        <ScrollBrand />
      </div>
      <BottomBarBlack />
    </div>
  );
};

export default Tumbuhan;
