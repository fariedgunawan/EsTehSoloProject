import React from "react";
import Navbar from "../Element/Navbar";
import estehsolologo from "../assets/estehsolologo.jpg";
const About = () => {
  return (
    <div className="about-container bg-white min-h-screen font-epilogue">
      <div className="heading-about bg-[#276631]">
        <Navbar />
      </div>
      <div className="about-content-container px-[35px] text-black">
        <div className="about-1 flex flex-col items-center sm:flex-row">
          <img src={estehsolologo} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="about-1-caption flex flex-col items-center sm:items-start">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Tentang Perushaan Kami</h2>
            <h2 className="text-justify sm:text-[20px] mt-[10px] sm:mt-[10px]">
              PT. Esok Harapan Bangsa adalah pioner perusahaan yang bergerak di bidang Food and Beverages yang berfokus ke franchise sejak 2010. Puluhan brand FnB telah diterbitkan dengan mengusung semangat kerja anak muda.
            </h2>
          </div>
        </div>
        <h2 className="font-semibold text-[20px] mt-[20px] sm:text-[30px] text-center sm:text-left">Visi Perusahaan</h2>
        <h2 className="text-justify sm:text-[20px] mt-[10px] sm:mt-[10px]">
          PT. Esok Harapan Bangsa bertujuan untuk memajukan usaha mitra dengan komitmen terhadap pengembangan dan konsep modern, menciptakan kenyamanan serta kepercayaan dalam kerjasama. Sebagai perusahaan franchise yang berfokus di bidang
          food and beverages, PT. Esok Harapan Bangsa berusaha menjadi mitra kesuksesan Anda dan berkontribusi pada kemajuan bangsa Indonesia.
        </h2>
      </div>
    </div>
  );
};

export default About;
