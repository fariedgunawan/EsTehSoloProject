import Navbar from "../../Element/Navbar";
import React, { useEffect } from "react";
import yakamuboba from "../../assets/yakamuboba.png";
import gbyakamuboba from "../../assets/gbyakamuboba.jpg";
import ScrollBrand from "../../Element/ScrollBrand";
import BottomBar from "../../Element/BottomBar";
import BottomBarBlack from "../../Element/BottomBarBlack";
const Yakamuboba = () => {
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
          <img src={yakamuboba} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="caption flex-col flex items-center sm:items-start">
            <h2 className="text-[20px] font-semibold sm:text-[30px]">Yakamu Boba (2021) </h2>
            <h2 className="text-center mt-[20px] sm:text-left sm:text-[20px]">
              Yakamu Boba adalah merek minuman boba yang menawarkan berbagai varian rasa, termasuk Ovaltine, Taro, Original Brown Sugar, dan Binggan Brown Sugar. Produk kami meliputi minuman dengan tambahan susu creamer, susu{" "}
              <span className="italic">full cream</span>, Oreo, gula aren, boba, dan topping <span className="italic">cheese cream</span> .
            </h2>
          </div>
        </div>
        <div className="gerobak mt-[60px] flex flex-col items-center sm:mt-[30px]">
          <img src={gbyakamuboba} className="w-[350px] sm:w-[450px]" alt="" />
          <h2 className="text-center mt-[20px] sm:w-[1000px] sm:text-[20px] sm:mt-[30px]">
            Yakamu Boba juga menawarkan peluang waralaba untuk bisnis minuman boba kami. Jika Anda tertarik untuk mencari produk boba tea lainnya, Anda dapat menjelajahi berbagai pilihan yang tersedia di platform.
          </h2>
          <div className="contact flex flex-col items-center mt-[40px] sm:mt-[60px]">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Contact</h2>
            <h2 className="mt-[10px] sm:text-[20px]">0821-4372-6717 (Area Jawa)</h2>
            <h2 className="sm:text-[20px]">0812-2685-7552 (Area Luar Pulau Jawa)</h2>
            <h2 className="sm:text-[20px]">Email : yakamuboba@gmail.com</h2>
            <h2 className="sm:text-[20px]">Website : https://yakamuboba.com</h2>
            <h2 className="sm:text-[20px]">Instagram : @yakamuboba</h2>
          </div>
        </div>

        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[60px] sm:text-[30px] sm:mt-[130px]">Brand Lainnya</h2>
        <ScrollBrand />
      </div>
      <BottomBarBlack />
    </div>
  );
};

export default Yakamuboba;
