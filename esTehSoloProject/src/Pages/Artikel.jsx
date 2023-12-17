import Navbar from "../Element/Navbar";
import React from "react";
import pr1 from "../assets/pr1.png";
import feature1 from "../assets/fea1pot.jpg";
import feature2cov from "../assets/feature2cov.png";
import artikel1 from "../assets/artikel1cov.png";
import artikel2 from "../assets/artikel2cov.png";
import artikel3 from "../assets/artikel3cov.png";
import artikel4 from "../assets/artikel4cov.jpg";
import artikel5 from "../assets/artikel5.jpg";
import artikel6 from "../assets/artikel6cov.jpg";
import artikel7 from "../assets/artikel7cov.jpg";
import artikel8 from "../assets/artikel8cov.jpg";
import artikel10 from "../assets/artikel10cov.jpg";
import { useNavigate } from "react-router-dom";
import BottomBar from "../Element/BottomBar";

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
            <img src={feature1} className="w-full rounded-md" alt="" />
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
        <div className="artikel-bag3 px-[35px] flex flex-wrap justify-center mt-[20px] gap-[50px] sm:gap-[30px] pb-[50px]">
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
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel4")}>
            <img src={artikel4} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Ini Manfaat Minum Teh Yang Mungkin Belum Kamu Ketahui</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 28 November 2023 - Es Teh S.O.L.O adalah merek minuman teh di bawah naungan...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel5")}>
            <img src={artikel5} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Uniknya Rasa Es Teh Kampoel Khas Solo</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px] sm:mt-[34px]">Jakarta, 29 November 2023 - Di tengah panasnya hari di Indonesia, nggak ada yang lebih...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel6")}>
            <img src={artikel6} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Ekspresikan Perasaanmu dengan Es Teh Solo</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px] sm:mt-[34px]">Jakarta, 30 November 2023 - Ada satu hal yang seringkali terlupakan dalam kehidupan...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel7")}>
            <img src={artikel7} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Kata Mereka Emang Boleh Se-seger Itu?</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px] sm:mt-[34px]">Jakarta, 1 Desember 2023 - Banyak orang yang bertanya-tanya, “Bisakah sebuah minuman...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel8")}>
            <img src={artikel8} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">The Changcuters Aja Minum Es Teh S.O.LO, Masa Kamu Nggak?</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 2 Desember 2023 - Kamu pasti tahu dong bagaimana semangatnya musik...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel9")}>
            <img src={pr1} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Es Teh S.O.L.O Mendengar Suara dan Keluh Kesahmu</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 3 Desember 2023 - Dalam perjalanan hidup yang penuh dengan tantangan...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
          <div className="bag1-1 flex flex-col w-[300px] sm:w-[450px] px-[20px] py-[10px] shadow-xl rounded-xl cursor-pointer" onClick={() => navigate("/artikel10")}>
            <img src={artikel10} className="w-full rounded-md" alt="" />
            <h2 className="font-semibold mt-[10px] sm:text-[16px]">Sebuah Komitmen Es Teh S.O.L.O untuk Membangun Masjid</h2>
            <h2 className="text-[12px] text-slate-500 mt-[10px] sm:text-[14px]">Jakarta, 5 Desember 2023 - Dalam sebuah langkah revolusioner, Es Teh S.O.L.O telah...</h2>
            <h2 className="text-[12px] font-semibold mt-[10px] sm:text-[14px]">Read More</h2>
          </div>
        </div>
      </div>
      {/* Artikel*/}
      <BottomBar />
    </div>
  );
};

export default Artikel;
