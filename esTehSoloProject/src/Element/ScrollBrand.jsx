import React from "react";
import tentangkamu from "../assets/tentangkamu.png";
import kamudawet from "../assets/kamudawet.png";
import yakamuboba from "../assets/yakamuboba.png";
import tehsolo from "../assets/tehsolo.png";
import nyoju from "../assets/nyoju.png";
import tumbuhan from "../assets/tumbuhan.png";
import tongtong from "../assets/tongtong.png";
const ScrollBrand = () => {
  return (
    <div className="scrollbar-hide overflow-x-scroll flex w-full no-scrollbar text-white font-epilogue font-semibold sm:pb-[25px] cursor-pointer">
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehmanis")}>
        <img src={tentangkamu} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehkampoel")}>
        <img src={kamudawet} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehtarik")}>
        <img src={yakamuboba} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehsusu")}>
        <img src={tehsolo} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehmilo")}>
        <img src={nyoju} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehcoklat")}>
        <img src={tumbuhan} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehblackcurrant")}>
        <img src={tongtong} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
    </div>
  );
};

export default ScrollBrand;
