import Navbar from "../Element/Navbar";
import cup from "../assets/cup.png";
import plastic from "../assets/plastic.png";
import estehmanis from "../assets/estehmanis.png";
import estehkampoel from "../assets/estehkampoel.png";
import estehtarik from "../assets/estehtarik.png";
import estehsusu from "../assets/estehsusu.png";
import estehmilo from "../assets/estehmilo.png";
import estehcoklat from "../assets/estehcoklat.png";
import estehblackcurrant from "../assets/estehblackcurrant.png";
import estehmatcha from "../assets/estehmatcha.png";
import estehjasmine from "../assets/estehjasmine.png";
import estehlemon from "../assets/estehlemon.png";
import estehleci from "../assets/estehleci.png";
import papercup from "../assets/papercup.png";
import jinjing from "../assets/jinjing.png";
import cupbening from "../assets/cupbening.png";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomBar from "../Element/BottomBar";
const Menu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="menu-body bg-white min-h-screen">
      {/*heading */}
      <div className="menu-head bg-[#276631]">
        <Navbar />
        <div className="head-content flex justify-center sm:mt-[60px]">
          <div className="head-title flex flex-col items-center font-epilogue text-white">
            <h2 className="text-[20px] font-bold sm:text-[40px]">Menu Es Teh S.O.L.O</h2>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#276631" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      {/*heading */}
      <div className="categories-product flex flex-col justify-center items-center px-[35px]">
        <h2 className="text-[20px] font-bold text-[#276631] sm:text-[30px]">Variasi Packaging</h2>
        <div className="scrollbar-hide overflow-x-scroll flex w-full no-scrollbar text-[#276631] font-epilogue font-semibold sm:pb-[25px] items-center mt-[30px] sm:justify-center sm:gap-[40px]">
          <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
            <img src={papercup} className="w-48 sm:w-60 h-auto min-w-[100px]" alt="Esteh Manis" />
            <h2 className="font-bold">Paper Cup</h2>
          </div>
          <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
            <img src={jinjing} className="w-48 sm:w-60 h-auto min-w-[100px]" alt="Esteh Manis" />
            <h2 className="font-bold mt-[10px]">Plastik Jinjing</h2>
          </div>
          <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
            <img src={cupbening} className="w-48 sm:w-60 h-auto min-w-[100px]" alt="Esteh Manis" />
            <h2 className="font-bold mt-[9px]">Gelas Plastik (16 oz / 22 oz)</h2>
          </div>
        </div>
      </div>
      {/*menu list */}
      <h2 className="text-[20px] font-bold text-[#276631] sm:text-[30px] text-center mt-[40px]">Menu Kami</h2>
      <div className="menu-list-container font-epilogue flex justify-center px-[35px] pb-[30px] mt-[100px]">
        <div className="menu-list flex flex-wrap justify-center gap-[20px] sm:gap-[70px]">
          <div className="menu-1 flex flex-col items-center cursor-pointer" onClick={() => navigate("/estehmanis")}>
            <img src={estehmanis} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Manis</h2>
            <h2 className="text-[#276631]">Rp3.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10 cursor-pointer" onClick={() => navigate("/estehkampoel")}>
            <img src={estehkampoel} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Kampoel</h2>
            <h2 className="text-[#276631]">Rp5.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center cursor-pointer" onClick={() => navigate("/estehtarik")}>
            <img src={estehtarik} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Tarik</h2>
            <h2 className="text-[#276631]">Rp7.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10 cursor-pointer" onClick={() => navigate("/estehsusu")}>
            <img src={estehsusu} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Susu</h2>
            <h2 className="text-[#276631]">Rp7.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center cursor-pointer" onClick={() => navigate("/estehmilo")}>
            <img src={estehmilo} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Milo</h2>
            <h2 className="text-[#276631]">Rp10.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10 cursor-pointer" onClick={() => navigate("/estehcoklat")}>
            <img src={estehcoklat} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Coklat</h2>
            <h2 className="text-[#276631]">Rp10.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center cursor-pointer" onClick={() => navigate("/estehblackcurrant")}>
            <img src={estehblackcurrant} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Blackcurrant Tea</h2>
            <h2 className="text-[#276631]">Rp10.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10 cursor-pointer" onClick={() => navigate("/estehmatcha")}>
            <img src={estehmatcha} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Matcha Tea</h2>
            <h2 className="text-[#276631]">Rp12.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center cursor-pointer" onClick={() => navigate("/estehjasmine")}>
            <img src={estehjasmine} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px] mt-[10px]">Jasmine Tea</h2>
            <h2 className="text-[#276631]">Rp7.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10 cursor-pointer" onClick={() => navigate("/estehlemon")}>
            <img src={estehlemon} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Lemon Tea</h2>
            <h2 className="text-[#276631]">Rp7.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center cursor-pointer" onClick={() => navigate("/estehleci")}>
            <img src={estehleci} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Lychee Tea</h2>
            <h2 className="text-[#276631]">Rp7.000</h2>
          </div>
        </div>
      </div>
      {/*menu list */}
      <BottomBar />
    </div>
  );
};

export default Menu;
