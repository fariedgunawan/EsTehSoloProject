import Navbar from "../Element/Navbar";
import React from "react";
import pr1 from "../assets/pr1.png";
import feature1 from "../assets/feature1.jpeg";
import feature2cov from "../assets/feature2cov.png";
import artikel1 from "../assets/artikel1cov.png";
import artikel2 from "../assets/artikel2cov.png";
import artikel3 from "../assets/artikel3cov.png";
import { useNavigate } from "react-router-dom";

const Artikel = () => {
  const navigate = useNavigate();
  return (
    <div className="artikel-body bg-white min-h-screen font-epilogue text-black">
      <div className="artikel-heading bg-[#276631]">
        <Navbar />
      </div>

      <h2 className="text-[20px] text-center mt-[20px] font-bold">Press Release</h2>
      {/*press release */}
      <div className="artikel-bag1 px-[35px] flex justify-center mt-[20px]">
        <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
          <img src={pr1} className="w-full rounded-md" alt="" />
          <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
          <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
          <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
        </div>
      </div>
      {/*press release */}

      <h2 className="text-[20px] text-center mt-[40px] font-bold">Feature</h2>
      {/* Feature*/}
      <div className="bag-2-container flex justify-center">
        <div className="artikel-bag2 px-[35px] flex flex-wrap justify-center mt-[20px] gap-[50px] sm:gap-[100px]">
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/feature1")}>
            <img src={feature1} className="w-full h-[270px] rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Bikin Heboh Warganet! Seorang Wanita Dilamar Kekasihnya Menggunakan Es Teh S.O.L.O</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 17 November 2023 - Sebuah momen romantis dan kreatif baru-baru ini membuat heboh warganet..</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/feature2")}>
            <img src={feature2cov} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Cerita Sukses Pak Yanto Bersama Es Teh S.O.L.O, Bermula dari Kebangkrutan</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 4 Desember 2023 - Pak Yanto adalah seorang pria berusia 45 tahun yang telah mengalami banyak...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
        </div>
      </div>
      {/* Feature*/}

      <h2 className="text-[20px] text-center mt-[40px] font-bold">Artikel</h2>
      {/* Artikel*/}
      <div className="bag-3-container flex justify-center">
        <div className="artikel-bag3 px-[35px] flex flex-wrap justify-center mt-[20px] gap-[50px] sm:gap-[30px]">
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel1")}>
            <img src={artikel1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">“Semua Aku Dirayakan…" Begitupun Es Teh S.O.L.O Merayakanmu</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 20 November 2023 - Tahukah kamu lagu yang berjudul "Semua Aku Dirayakan"...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel2")}>
            <img src={artikel2} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Sinergi & Inovasi Antar Mitra dan Es Teh S.O.L.O di Jakarta</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 27 November 2023 - Sebagai brand yang selalu mengutamakan kerja sama...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel3")}>
            <img src={artikel3} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Raih Sukses di Usia Muda Bersama Es Teh S.O.L.O</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px] sm:mt-[34px]">Jakarta, 27 November 2023 - Apakah kamu seorang generasi muda yang bersemangat, suka cari...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">25 Oktober 2023</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">25 Oktober 2023</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">25 Oktober 2023</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">25 Oktober 2023</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">25 Oktober 2023</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">25 Oktober 2023</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer">
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">25 Oktober 2023</h2>
          </div>
        </div>
      </div>
      {/* Artikel*/}
    </div>
  );
};

export default Artikel;
