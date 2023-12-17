import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel3 from "../../assets/artikel3.jpg";
const Ar4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px]">
        <h2 className="text-center font-bold">Ini Manfaat Minum Teh Yang Mungkin Belum Kamu Ketahui</h2>
        <h2 className="mt-[20px]">
          Jakarta, 28 November 2023 - Es Teh S.O.L.O adalah merek minuman teh di bawah naungan PT. Esok Harapan Bangsa yang memiliki beragam varian. Dengan variasi menunya, Es Teh S.O.L.O menawarkan kombinasi sempurna antara rasa, kualitas,
          dan manfaat kesehatan. Dalam artikel ini, kami akan membahas manfaat minum teh untukmu sebagai berikut.
        </h2>
        <h2 className="mt-[20px] ml-[20px] font-semibold">1.Mengandung Antioksidan</h2>
        <h2 className="mt-[20px]">
          Teh mengandung antioksidan yang dapat membantu melawan radikal bebas dalam tubuh. Antioksidan ini juga dapat membantu mencegah kerusakan sel dan penyakit kronis. Dalam hal ini, teh juga digadang-gadang dapat membantu tubuh untuk
          melawan paparan radikal bebas.
        </h2>
        <h2 className="mt-[20px] ml-[20px] font-semibold">2.Meningkatkan Kesehatan Jantung</h2>
        <h2 className="mt-[20px]">
          Beberapa penelitian telah menunjukkan bahwa minum teh secara teratur dapat membantu mengurangi risiko penyakit jantung. Ini karena teh dapat membantu mengendalikan tekanan darah dan kadar kolesterol. Hal ini telah dibuktikan dalam
          suatu penelitian yang menunjukkan bahwa orang yang rutin meminum teh akan memiliki kadar kolestrol jahat yang lebih rendah.
        </h2>
        <h2 className="mt-[20px] ml-[20px] font-semibold">3.Menurunkan Risiko Kanker</h2>
        <h2 className="mt-[20px]">
          Antioksidan dalam teh juga dapat membantu melawan pertumbuhan sel kanker. Beberapa jenis teh, seperti teh hijau, telah dikaitkan dengan pengurangan risiko beberapa jenis kanker. Hal ini dikarenakan kandungan epigallocatechin
          gallate (EGCG) yang terdapat dalam teh.
        </h2>
        <h2 className="mt-[20px] ml-[20px] font-semibold">4.Meningkatkan Metabolisme</h2>
        <h2 className="mt-[20px]">
          Metabolisme adalah sistem pertahanan tubuh dalam menangkal beragam penyakit yang disebabkan oleh bakteri dan virus. Jika kamu memiliki metabolisme yang lebih cepat, tubuhmu membakar energi lebih cepat sehingga dapat membantu
          penurunan berat badan yang sehat dan manajemen berat badan. Untuk meningkatkan metabolisme tubuh bisa kamu dapatkan dengan pola hidup yang sehat dan juga mengonsumsi minuman seperti teh.
        </h2>
        <h2 className="mt-[20px] ml-[20px] font-semibold">5.Mengurangi Stres</h2>
        <h2 className="mt-[20px]">
          Manfaat teh untuk kesehatan tidak hanya dari segi fisik melainkan dapat juga menjaga suasana hati dan pikiran kita. Teh mengandung asam amino bernama L-teanin yang dapat membantu meredakan stres dan meningkatkan konsentrasi.
          Sehingga dalam hal ini teh memberikan efek yang dapat merelaksasi tubuh dan membuat rasa tenang selama situasi stres.
        </h2>
        <h2 className="mt-[20px] ml-[20px] font-semibold">6.Meningkatkan Kesehatan Kulit</h2>
        <h2 className="mt-[20px]">
          Antioksidan dalam teh dapat membantu menjaga kulit tetap sehat, bersinar dan mencegah penuaan dini. Dalam teh juga mengandung antioksidan katekin dan polifenol yang dikenal dapat membantu mengecilkan pembuluh darah di bawah kulit
          sehingga dapat melawan jerawat. Selain itu, kandungan anti-inflamasi dalam teh juga berperan dalam mengurangi kemerahan dan iritasi kulit, memberikan penampilan yang lebih halus dan merata.
        </h2>
        <h2 className="mt-[20px]">
          Nah, karena kamu sudah tahu manfaat minum teh itu berdampak baik, jangan sampai kamu melewatkan kesempatan ini! Kami ingin kamu merasakan kelezatan dan manfaat kesehatan teh dalam setiap tegukan Es Teh S.O.L.O. Nikmati khasiatnya
          dan coba sekarang juga!
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel3} className="w-[450px] sm:w-[500px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ar4;
