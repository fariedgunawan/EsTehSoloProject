import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel10 from "../../assets/artikel10.jpg";
import BottomBar from "../../Element/BottomBar";
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
          Jakarta, 5 Desember 2023 - Dalam sebuah langkah revolusioner, Es Teh S.O.L.O telah mempersembahkan segala laba yang dihasilkan tahun 2023 untuk proyek pembangunan masjid. Inilah bukti nyata komitmen kami untuk tidak hanya
          merayakan kelezatan di setiap tetes es teh, tetapi juga untuk merangkul keberagaman dan membangun komunitas yang berdampingan dengan cinta dan kebaikan.
        </h2>
        <h2 className="mt-[20px]">
          Keputusan ini tidak hanya menciptakan jejak sejarah dalam dunia minuman, tetapi juga memberikan arti yang mendalam pada setiap gelas Es Teh S.O.L.O yang Anda nikmati. Setiap tegukan adalah kontribusi langsung Anda untuk
          pembangunan masjid yang akan menjadi pusat kegiatan sosial dan spiritual di komunitas kami.
        </h2>
        <h2 className="mt-[20px]">
          Dalam sebuah dunia di mana bisnis seringkali hanya diukur oleh keuntungan, Es Teh S.O.L.O mendorong batas-batas itu. Kami memilih untuk memberdayakan masyarakat, menjadikan keuntungan sebagai alat untuk menciptakan perubahan
          positif yang benar-benar berarti. Bersama kita bukan hanya menghasilkan minuman yang menyegarkan, tetapi juga membangun fondasi bagi masa depan yang lebih baik.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel10} className="w-[400px] sm:w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Gambar Proyek Pembangunan Masjid</h2>
        </div>
        <h2 className="mt-[20px]">
          Proyek pembangunan masjid bukan hanya tentang struktur fisik, tetapi juga tentang membangun kebersamaan dan keterlibatan aktif masyarakat. Setiap kemasan Es Teh S.O.L.O sekarang menjadi simbol harapan dan kolaborasi untuk
          membentuk dunia yang lebih baik, di mana semua lapisan masyarakat bersatu dalam keragaman.
        </h2>
        <h2 className="mt-[20px]">
          Bergabunglah bersama kami dalam perjalanan ini! Setiap kali kamu memilih Es Teh S.O.L.O, kamu ikut berpartisipasi dalam membentuk masa depan yang lebih cerah dan bermakna. Bersama-sama, mari kita ciptakan cerita keberhasilan yang
          tak terlupakan, memulai dari setiap tegukan es teh yang memberdayakan dan mempersatukan.
        </h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Ar10;
