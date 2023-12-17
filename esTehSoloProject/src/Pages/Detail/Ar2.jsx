import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel2 from "../../assets/artikel2.jpg";
import BottomBar from "../../Element/BottomBar";

const Ar2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px] pb-[50px]">
        <h2 className="text-center font-bold">Sinergi & Inovasi Antar Mitra dan Es Teh S.O.L.O di Jakarta </h2>
        <h2 className="mt-[20px]">
          <span className="font-bold">Jakarta, 27 November 2023</span> - Sebagai <span className="italic">brand</span> yang selalu mengutamakan kerja sama dan kebersamaan, Es Teh S.O.L.O baru saja menggelar{" "}
          <span className="italic">gathering</span> yang sangat berkesan bersama para mitra kami. Acara <span className="italic">gathering</span> ini diselenggarakan di Grand Slipi Convention Hall, Jakarta pada Minggu, 26 November 2023
          kemarin. Ini menjadi wujud nyata dari apresiasi kami terhadap seluruh mitra yang telah bersama-sama mengembangkan Es Teh S.O.L.O.
        </h2>
        <h2 className="mt-[20px]">
          Acara ini dihadiri oleh ratusan mitra dan diisi dengan berbagai sesi interaktif, <span className="italic">sharing</span> pengalaman, dan hiburan. Kami merasa terhormat dan berterima kasih kepada semua mitra yang telah meluangkan
          waktu untuk hadir. Keberadaan Anda semua adalah motivasi yang mendorong kami untuk terus berkembang.
        </h2>
        <h2 className="mt-[20px]">
          Kami juga ingin menginformasikan bahwa rangkaian <span className="italic">gathering</span> ini akan terus berlanjut. Tujuan acara <span className="italic">gathering</span> ini yaitu untuk memperkuat jaringan dan menjalin kedekatan
          yang lebih erat bersama para mitra. Kami telah merencanakan beberapa <span className="italic">gathering</span> mendatang di beberapa kota, sebagai berikut:
        </h2>
        <h2 className="mt-[20px] font-semibold">• Desember 2023 di Samarinda, Kalimantan Timur</h2>
        <h2 className="mt-[20px]">
          Pada bulan Desember 2023, kami akan mengadakan <span className="italic">gathering</span> di Samarinda, Kalimantan Timur. Sebagai pintu gerbang utama di daerah Kalimantan Timur, Samarinda dipilih sebagai lokasi strategis untuk
          berkumpul dan berdiskusi tentang peluang pasar di wilayah timur Indonesia. Acara ini tidak hanya menjadi forum untuk saling bertukar ide tetapi juga untuk memperkuat hubungan antara Es Teh S.O.L.O dan mitra setempat.
        </h2>
        <h2 className="mt-[20px] font-semibold">• Januari 2024 di Wonogiri</h2>
        <h2 className="mt-[20px]">
          Pada bulan Januari 2024, giliran Wonogiri menjadi tuan rumah <span className="italic">gathering</span> berikutnya. Acara ini dirancang khusus untuk para mitra di Jawa Tengah dan sekitarnya. Selain memberikan kesempatan untuk lebih
          mengenal inovasi produk kami, <span className="italic">gathering</span> ini juga menjadi <span className="italic">platform</span> yang ideal untuk membahas strategi pemasaran yang lebih efektif di wilayah tersebut.
        </h2>
        <h2 className="mt-[20px] font-semibold">• Februari 2024 di Semarang</h2>
        <h2 className="mt-[20px]">
          Kami akan melanjutkan rangkaian <span className="italic">gathering</span> di Semarang. Sebagai salah satu kota besar di Jawa Tengah, Semarang menjadi pusat pertemuan yang ideal. Melalui acara ini, kami berharap dapat memberikan
          kesempatan bagi mitra untuk berbagi wawasan, pengalaman, dan memperluas jaringan mereka di industri minuman teh yang semakin berkembang.
        </h2>
        <h2 className="mt-[20px]">
          Setiap <span className="italic">gathering</span> akan dirancang khusus untuk menciptakan momen yang tidak hanya berkesan tetapi juga bermanfaat untuk pengembangan usaha kita bersama. Kami ingin menyampaikan terima kasih yang tulus
          kepada semua mitra yang telah bergabung dalam <span className="italic">gathering</span> ini, berkat kontribusi dan dukungan para mitra Es Teh S.O.L.O dapat terus berinovasi hingga saat ini. Harapan kami semoga Es Teh S.O.L.O
          bersama para mitra dapat meningkatkan sinergi dan kerja sama, tidak hanya meningkatkan penjualan, tetapi juga membuka peluang pasar baru.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel2} className="w-[450px] sm:w-[600px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Gambar dari Instagram @estehsolo_</h2>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Ar2;
