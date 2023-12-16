import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel3 from "../../assets/artikel3.jpg";
const Ar3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px]">
        <h2 className="text-center font-bold">Raih Sukses di Usia Muda Bersama Es Teh S.O.L.O</h2>
        <h2 className="mt-[20px]">
          Jakarta, 27 November 2023 - Apakah kamu seorang generasi muda yang bersemangat, suka cari cuan, atau ingin menjadi seseorang yang sukses? Inilah saatnya untuk bergabung dengan keluarga Es Teh S.O.L.O dan rasakan manisnya
          kesuksesan di dunia bisnis minuman!
        </h2>
        <h2 className="mt-[20px] font-semibold">Mengapa Es Teh S.O.L.O?</h2>
        <h2 className="mt-[20px] ml-[20px]">1.Inovasi dalam Setiap Tetes</h2>
        <h2 className="mt-[20px]">
          Es Teh S.O.L.O tidak hanya menyajikan minuman teh biasa, setiap gelasnya adalah hasil inovasi rasa yang unik. Kami memastikan bahwa pengalaman minum teh menjadi sesuatu yang berbeda bagi pelanggan kami. Kami juga terus menciptakan
          varian baru dan tetap memastikan kesegaran dalam setiap tetesnya.
        </h2>
        <h2 className="mt-[20px] ml-[20px]">2.Dukungan Kemitraan yang Tak Tertandingi</h2>
        <h2 className="mt-[20px]">
          Ketika kamu bergabung dengan kemitraan Es Teh S.O.L.O, artinya kamu telah menjadi bagian dari keluarga kami. Kami tidak hanya memberikan pelatihan dan dukungan penuh dalam pengelolaan bisnis. Tetapi kami juga memastikan bahwa kamu
          merasa didukung sepenuhnya dalam segala aspek, dari pemasaran hingga peningkatan keahlian.
        </h2>
        <h2 className="mt-[20px] ml-[20px]">3.Pasar yang Tak Terbatas</h2>
        <h2 className="mt-[20px]">
          Pasar untuk bisnis minuman Es Teh S.O.L.O menjadi sangat luas. Di mana menghadapi popularitas yang terus meningkat, kami juga membuka peluang bagi mitra kami untuk membangun kesuksesan di tengah-tengah komunitas yang senang
          mengeksplorasi berbagai rasa teh lokal. Dengan demikian, kamu dapat mengembangkan bisnis Anda tanpa terbatas oleh batasan pasar.
        </h2>
        <h2 className="mt-[20px] ml-[20px]">4.Keuntungan Finansial yang Menggiurkan</h2>
        <h2 className="mt-[20px]">
          Selain menyajikan minuman yang segar dan inovatif, bergabung dengan kemitraan Es Teh S.O.L.O juga memberikan peluang keuntungan finansial yang menggiurkan. Melalui model bisnis yang telah terbukti sukses, banyak mitra kami telah
          meraih penghasilan yang signifikan dari kemitraan ini. Menjadikan Es Teh S.O.L.O sebagai investasi adalah langkah cerdas dalam meraih kesuksesan finansial.
        </h2>
        <h2 className="mt-[20px] font-semibold">Bagaimana Cara Bergabung?</h2>
        <h2 className="mt-[20px]">
          Proses bergabung dengan Es Teh S.O.L.O sangatlah mudah. Kunjungi sosial media kami atau hubungi tim kemitraan kami untuk informasi lebih lanjut. Jangan lewatkan kesempatan untuk meraih kesuksesan di usia muda dan rasakan kebebasan
          finansial bersama Es Teh S.O.L.O!
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel3} className="w-[450px] sm:w-[500px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ar3;
