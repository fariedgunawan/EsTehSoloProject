import React, { useEffect } from "react";
import Navbar from "../Element/Navbar";
import esokharapanbangsa from "../assets/esokharapanbangsabulet.png";
import ScrollMenu from "../Element/ScrollMenu";
import ScrollBrand from "../Element/ScrollBrand";
import gt1 from "../assets/gt1.jpg";
import gt2 from "../assets/gt2.jpg";
import gt3 from "../assets/gt3.jpg";
import gt4 from "../assets/gt4.jpg";
import gt5 from "../assets/gt5.jpg";
import gt6 from "../assets/gt6.jpg";
import gt7 from "../assets/gt7.jpg";
import gt8 from "../assets/gt8.jpg";
import gt9 from "../assets/gt9.png";
import gt10 from "../assets/gt10.png";
import gt11 from "../assets/gt11.png";
import gt12 from "../assets/gt12.jpg";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container bg-white min-h-screen font-epilogue">
      <div className="heading-about bg-[#276631]">
        <Navbar />
      </div>
      <div className="about-content px-[35px]">
        <div className="about-title flex flex-col items-center mt-[30px]">
          <h2 className="text-black font-bold text-[20px] sm:text-[30px]">PT. Esok Harapan Bangsa</h2>
          <img src={esokharapanbangsa} className="w-[300px] sm:w-[400px] mt-[20px]" alt="" />
        </div>
        <div className="about-caption">
          <div className="perusahaan-kami flex flex-col items-center text-black sm:items-start">
            <h2 className="text-[20px] font-semibold mt-[40px] sm:text-[30px]">Tentang Perusahaan Kami</h2>
            <h2 className="text-[15px] text-center mt-[10px]  sm:text-[20px] sm:text-justify">
              Pioneer perusahaan yang bergerak dibidang F&B yang berfokus ke franchise sejak 2010. Puluhan brand F&B telah diterbitkan dengan mengusung semangat kerja anak muda. Kami berkomitmen untuk berkontribusi terhadap keberhasilan
              mitra kami. Dengan tekat yang kuat terus bergerak kedepan agar esok ini dan nanti mampu mampu menghadapi rintangan apapun bersama PT ESOK HARAPAN BANGSA.
            </h2>
            <h2 className="mt-[20px] font-semibold sm:text-[20px]">Better Place, Good Life.</h2>
          </div>
          <div className="visi-perusahaan flex flex-col items-center text-center text-black sm:items-start">
            <h2 className="text-[20px] font-semibold mt-[40px] sm:text-[30px]">Visi Perusahaan</h2>
            <h2 className="mt-[10px] text-[15px] sm:text-[20px] sm:text-justify">
              PT. Esok Harapan Bangsa bertujuan untuk memajukan usaha mitra dengan komitmen terhadap pengembangan dan konsep modern, menciptakan kenyamanan serta kepercayaan dalam kerjasama. Sebagai perusahaan franchise yang berfokus di
              bidang food and beverages, PT. Esok Harapan Bangsa berusaha menjadi mitra kesuksesan Anda dan berkontribusi pada kemajuan bangsa Indonesia.
            </h2>
          </div>
          <div className="misi-perusahaan flex flex-col items-center text-black sm:items-start">
            <h2 className="text-[20px] font-semibold mt-[40px] sm:text-[30px]">Misi Perusahaan</h2>
            <h2 className="mt-[10px] text-[15px] text-center sm:text-[20px] sm:text-justify">Fokus perusahaan adalah memberikan kualitas terbaik, menjaga kebersihan, dan menjadikan produk unggulan.</h2>
          </div>
        </div>
        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[40px] sm:text-[30px] sm:mt-[130px]">Brand Kami</h2>
        <ScrollBrand />
        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[40px] sm:text-[30px] sm:mt-[30px]">Our Great Team</h2>
        <div className="great-team-container flex justify-center px-0 sm:px-[300px] mt-[40px]">
          <div className="great-team-pict flex gap-[20px] flex-wrap justify-center">
            <img src={gt1} className="w-[200px]" alt="" />
            <img src={gt2} className="w-[200px]" alt="" />
            <img src={gt3} className="w-[200px]" alt="" />
            <img src={gt4} className="w-[200px]" alt="" />
            <img src={gt5} className="w-[200px]" alt="" />
            <img src={gt6} className="w-[200px]" alt="" />
            <img src={gt7} className="w-[200px]" alt="" />
            <img src={gt8} className="w-[200px]" alt="" />
            <img src={gt9} className="w-[200px]" alt="" />
            <img src={gt10} className="w-[200px]" alt="" />
            <img src={gt12} className="w-[200px]" alt="" />
          </div>
        </div>
        <div className="location mt-[70px] pb-[100px] sm:flex sm:justify-between sm:items-center sm:px-[50px]">
          <div className="office flex flex-col items-center text-black sm:mt-[60px]">
            <h2 className="text-[20px] font-bold">Office</h2>
            <h2 className="text-center mt-[20px] sm:w-[400px]">A Nation Space, Jl. Adi Sucipto No.42, Puspan, Blulukan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57174</h2>
            <button
              className="text-sky-700 mt-[20px]"
              onClick={() =>
                (window.location.href =
                  "https://www.google.com/search?client=ms-android-samsung-ga-rev1&sca_esv=590933568&q=ANS+%7C+a+nation+space&ludocid=3535858273153365960&ibp=gwp;0,7&lsig=AB86z5VZ-8k7Pm7mNw5ssoIGNZbV&kgs=7f6a903826a10ad0&shndl=-1&shem=lcspc,lsp&source=sh/x/loc/act/m1/2")
              }
            >
              Visit Maps
            </button>
          </div>
          <div className="office flex flex-col items-center text-black mt-[40px] sm:mt-0">
            <h2 className="text-[20px] font-bold">Working Hours</h2>
            <h2 className="text-center mt-[20px]">Monday - Friday, 08.00 - 16.00 Saturday, 09.00 - 15.00</h2>
          </div>
          <div className="office flex flex-col items-center text-black mt-[40px] sm:mt-0">
            <h2 className="text-[20px] font-bold">Contact Us</h2>
            <h2 className="text-center mt-[20px]">Support@esokharapanbangsa.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
