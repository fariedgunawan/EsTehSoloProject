import Navbar from "../../Element/Navbar";
import React, { useEffect } from "react";
import nyoju from "../../assets/nyoju.png";
import gbnyoju from "../../assets/gbnyoju.jpg";
import ScrollBrand from "../../Element/ScrollBrand";
import BottomBar from "../../Element/BottomBar";
import BottomBarBlack from "../../Element/BottomBarBlack";
const Nyoju = () => {
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
          <img src={nyoju} className="w-[400px] sm:w-[500px]" alt="" />
          <div className="caption flex-col flex items-center sm:items-start">
            <h2 className="text-[20px] font-semibold sm:text-[30px]">Nyoju (2021)</h2>
            <h2 className="text-center mt-[20px] sm:text-left sm:text-[20px]">
              Nyoju adalah sebuah merek minuman yang menawarkan berbagai varian rasa, termasuk <span className="italic">cookies</span> keju, <span className="italic">cookies drink</span> + keju, dan{" "}
              <span className="italic">strawberry</span> drink + keju. Harga produk kami berkisar antara 14.000 rupiah.
            </h2>
          </div>
        </div>
        <div className="gerobak mt-[60px] flex flex-col items-center sm:mt-[30px]">
          <img src={gbnyoju} className="w-[350px] sm:w-[450px]" alt="" />
          <h2 className="text-center mt-[20px] sm:w-[1000px] sm:text-[20px] sm:mt-[30px]">
            Kami mengundang Anda menjadi bagian mitra kami. Produk yang kami tawarkan antara lain cookies, vanilla, dan redberry. Dengan racikan resep yang unik menciptakan minuman yang manis dan segar. Kami menawarkan paket usaha dengan
            potongan hingga 50% dan dapatkan benefit lainnya.
          </h2>
          <div className="contact flex flex-col items-center mt-[40px] sm:mt-[60px]">
            <h2 className="font-semibold text-[20px] sm:text-[30px]">Contact</h2>
            <h2 className="mt-[10px] sm:text-[20px]">0813-9277-0117</h2>
            <h2 className="sm:text-[20px]">Website : http://nyoklatkeju.com/</h2>
            <h2 className="sm:text-[20px]">Instagram : @nyoju___</h2>
          </div>
        </div>

        <h2 className="text-[20px] text-black font-bold flex justify-center mt-[60px] sm:text-[30px] sm:mt-[130px]">Brand Lainnya</h2>
        <ScrollBrand />
      </div>
      <BottomBarBlack />
    </div>
  );
};

export default Nyoju;
