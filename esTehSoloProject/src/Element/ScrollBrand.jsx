import React from "react";
import tentangkamu from "../assets/tentangkamu.png";
import kamudawet from "../assets/kamudawet.png";
import yakamuboba from "../assets/yakamuboba.png";
import tehsolo from "../assets/tehsolo.png";
import nyoju from "../assets/nyoju.png";
import tumbuhan from "../assets/tumbuhan.png";
import tongtong from "../assets/tongtong.png";
import { useNavigate } from "react-router-dom";
const ScrollBrand = () => {
  const navigate = useNavigate();
  return (
    <div className="scrollbar-hide overflow-x-scroll flex w-full no-scrollbar text-white font-epilogue font-semibold sm:pb-[25px] cursor-pointer">
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/tentangkamu")}>
        <img src={tentangkamu} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/kamudawet")}>
        <img src={kamudawet} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/yakamuboba")}>
        <img src={yakamuboba} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehsolo")}>
        <img src={tehsolo} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/nyoju")}>
        <img src={nyoju} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/tumbuhan")}>
        <img src={tumbuhan} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/tongtong")}>
        <img src={tongtong} className="w-64 h-auto min-w-[100px] " alt="Esteh Manis" />
      </div>
    </div>
  );
};

export default ScrollBrand;
