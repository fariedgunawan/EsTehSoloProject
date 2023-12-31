import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel9 from "../../assets/artikel9cov.jpg";
import artikel92 from "../../assets/artikel9.jpg";
import BottomBar from "../../Element/BottomBar";
const Ar9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px] pb-[50px]">
        <h2 className="text-center font-bold">Es Teh S.O.L.O Mendengar Suara dan Keluh Kesahmu</h2>
        <h2 className="mt-[20px]">
          <span className="font-bold">Jakarta, 3 Desember 2023</span> - Dalam perjalanan hidup yang penuh dengan tantangan, setiap langkah perjuangan yang kamu lalui adalah cermin dari tekadmu yang tak kenal lelah. Di tengah kesibukan dan
          kelelahanmu, Es Teh S.O.L.O ingin mengucapkan terima kasih yang tulus atas usahamu yang luar biasa. Kami mengapresiasi dedikasimu yang terus mendukung dan menikmati segarnya rasa teh khas Solo kami.
        </h2>
        <h2 className="mt-[20px]">
          Kami menyadari bahwa perjuanganmu selama ini adalah bagian dari perjalanan yang berharga. Kami percaya bahwa setiap orang telah berusaha sekuat tenaga dalam menjalani hari dan pantas untuk diapresiasi. Es Teh S.O.L.O selalu
          berkomitmen untuk memberikan yang terbaik untukmu. Karena bagi kami, setiap kesempatan untuk membuatmu merasa dihargai adalah sebuah kebanggaan.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel9} className="w-[400px] sm:w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Ilustrasi</h2>
        </div>
        <h2 className="mt-[20px]">
          Sebagai ungkapan rasa terima kasih kami kepadamu pelanggan setia yang telah bersama kami dalam setiap tegukan dan setiap langkah, Es Teh S.O.L.O dengan bangga mempersembahkan Promo Spesial Penghargaan Pelanggan! Mulai hari ini,
          nikmati diskon 20% untuk setiap pembelian Es Teh S.O.L.O. Gunakan kode promo <span className="font-bold">TERIMAKASIH20</span> saat melakukan pemesanan melalui aplikasi atau di <span className="italic">outlet</span> kami. Promo ini
          hanya berlaku sampai akhir Desember 2023.
        </h2>
        <h2 className="mt-[20px]">
          Terima kasih telah menjadi bagian dari perjalanan kami. Bersama Es Teh S.O.L.O, kami akan selalu mendengarkan suara dan keluh kesahmu. Jadikan setiap tegukan Es Teh S.O.LO sebagai penyemangat dalam setiap perjalanan dan perjuangan
          yang kamu lalui.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel92} className="w-[400px] sm:w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Poster Promo Spesial Penghargaan Pelanggan</h2>
        </div>
        <h2 className="mt-[20px] font-bold">#EsTehSOLO #TerimaKasihPelanggan #PerjalananBersama</h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Ar9;
