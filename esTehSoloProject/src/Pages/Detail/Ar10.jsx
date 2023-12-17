import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel10 from "../../assets/artikel10.jpg";
const Ar10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px]">
        <h2 className="text-center font-bold">Sebuah Komitmen Es Teh S.O.L.O untuk Membangun Masjid</h2>
        <h2 className="mt-[20px]">
          Jakarta, 5 Desember 2023 - Dalam sebuah langkah revolusioner, Es Teh S.O.L.O telah mempersembahkan 50% laba yang dihasilkan tahun 2023 untuk proyek pembangunan masjid. Inilah bukti nyata komitmen kami untuk tidak hanya merayakan
          kelezatan di setiap tetes es teh, tetapi juga untuk merangkul keberagaman dan membangun komunitas yang berdampingan dengan cinta dan kebaikan.
        </h2>
        <h2 className="mt-[20px]">
          Keputusan ini tidak hanya menciptakan jejak sejarah dalam dunia minuman, tetapi juga memberikan arti yang mendalam pada setiap gelas Es Teh S.O.L.O yang Anda nikmati. Setiap tegukan adalah kontribusi langsung Anda untuk
          pembangunan masjid yang akan menjadi pusat kegiatan sosial dan spiritual di komunitas kami.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel10} className="w-[400px] sm:w-[450px]" alt="" />
        </div>
        <h2 className="mt-[20px]">
          Sebagai ungkapan rasa terima kasih kami kepadamu pelanggan setia yang telah bersama kami dalam setiap tegukan dan setiap langkah, Es Teh S.O.L.O dengan bangga mempersembahkan Promo Spesial Penghargaan Pelanggan! Mulai hari ini,
          nikmati diskon 20% untuk setiap pembelian Es Teh S.O.L.O. Gunakan kode promo TERIMAKASIH20 saat melakukan pemesanan melalui aplikasi atau di outlet kami. Promo ini hanya berlaku sampai akhir Desember 2023.
        </h2>
        <h2 className="mt-[20px]">
          Terima kasih telah menjadi bagian dari perjalanan kami. Bersama Es Teh S.O.L.O, kami akan selalu mendengarkan suara dan keluh kesahmu. Jadikan setiap tegukan Es Teh S.O.LO sebagai penyemangat dalam setiap perjalanan dan perjuangan
          yang kamu lalui.
        </h2>
        <h2 className="mt-[20px]">#EsTehSOLO #TerimaKasihPelanggan #PerjalananBersama</h2>
      </div>
    </div>
  );
};

export default Ar10;
