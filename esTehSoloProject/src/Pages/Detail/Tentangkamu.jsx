import Navbar from "../../Element/Navbar";
import React, { useEffect } from "react";
import tentangkamu from "../../assets/tentangkamu.png";
import gbtentangkamu from "../../assets/gbtentangkamu.jpg";
import ScrollBrand from "../../Element/ScrollBrand";
import BottomBar from "../../Element/BottomBar";
import BottomBarBlack from "../../Element/BottomBarBlack";
const Tentangkamu = () => {
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
          <img src={tentangkamu} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="caption flex-col flex items-center sm:items-start">
            <h2 className="text-[20px] font-semibold sm:text-[30px]">Tentang Kamu Drink (2019)</h2>
            <h2 className="text-center mt-[20px] sm:text-left sm:text-[20px]">
              Tentang Kamu Drink adalah merek minuman <span className="italic">signature</span> yang menawarkan berbagai varian rasa dengan topping <span className="italic">caramel crunch</span> yang gurih. Beberapa varian rasa yang
              ditawarkan antara lain Choco Taro, Choco Milk, Choco Red Velvet.
            </h2>
          </div>
        </div>
        <div className="gerobak mt-[60px] flex flex-col items-center sm:mt-[30px]">
          <img src={gbtentangkamu} className="w-[350px] sm:w-[450px]" alt="" />
          <h2 className="text-center mt-[20px] sm:w-[1000px] sm:text-[20px] sm:mt-[30px]">
            Menawarkan paket usaha dan meyakini bahwa kami berkomitmen untuk menuntun pada jalan sukses penjualan. Ini bukan hanya tentang usaha kami, tetapi tentang kamu. Dapatkan info lebih lanjut dalam website kami, mari mulai perjalanan
            sukses mu bersama kami.
          </h2>
          <div className="contact flex flex-col items-center mt-[40px] sm:mt-[60px]">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Contact</h2>
            <h2 className="mt-[10px] sm:text-[20px]">0812-2685-7572 (Area Jawa)</h2>
            <h2 className="sm:text-[20px]">0852-3678-7434 (Area Luar Pulau Jawa)</h2>
            <h2 className="sm:text-[20px]">Website : https://tentangkamu.com</h2>
          </div>
        </div>

        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[60px] sm:text-[30px] sm:mt-[130px]">Brand Lainnya</h2>
        <ScrollBrand />
      </div>
      <BottomBarBlack />
    </div>
  );
};

export default Tentangkamu;
