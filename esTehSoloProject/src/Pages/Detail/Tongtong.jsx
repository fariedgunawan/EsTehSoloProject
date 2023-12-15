import Navbar from "../../Element/Navbar";
import React, { useEffect } from "react";
import tongtong from "../../assets/tongtong.png";
import gbtongtong from "../../assets/gbtongtong.jpg";
import ScrollBrand from "../../Element/ScrollBrand";
const Tongtong = () => {
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
          <img src={tongtong} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="caption flex-col flex items-center sm:items-start">
            <h2 className="text-[20px] font-semibold sm:text-[30px]">TONG TONG DRINK (2022)</h2>
            <h2 className="text-center mt-[20px] sm:text-left sm:text-[20px]">
              Mengadopsi dari minuman boba, Tong Tong berkreasi menaikkan level minuman dengan cita rasa yang berbeda. Dalam balutan brown sugar dan topping jelly yang kenyal kami sebut The Next Level of Boba Drink!
            </h2>
          </div>
        </div>
        <div className="gerobak mt-[60px] flex flex-col items-center sm:mt-[30px]">
          <img src={gbtongtong} className="w-[350px] sm:w-[450px]" alt="" />
          <h2 className="text-center mt-[20px] sm:w-[1000px] sm:text-[20px] sm:mt-[30px]">
            Setiap produk diulas dengan bahan baku yang berkualitas dan diperiksa secara ketat untuk memastikan keamanan dan kualitas pangan dan minuman. Varian yang kami tawarkan beberapa diantaranya seperti Tong Tong Drink Original Brown
            Sugar, Coklat, Milo, dan Ovomaltine.
          </h2>
          <div className="contact flex flex-col items-center mt-[40px] sm:mt-[60px]">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Contact</h2>
            <h2 className="mt-[10px] sm:text-[20px]">0812-2966-5973</h2>
            <h2 className="sm:text-[20px] text-center">Jl. Adi Sucipto 42-41, Blukukan Dua, Blulukan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57174</h2>
            <h2 className="sm:text-[20px]">Website : http://tongtongdrink.com</h2>
            <h2 className="sm:text-[20px]">Instagram : @tongtongdrink</h2>
          </div>
        </div>

        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[60px] sm:text-[30px] sm:mt-[130px]">Brand Lainnya</h2>
        <ScrollBrand />
      </div>
    </div>
  );
};

export default Tongtong;
