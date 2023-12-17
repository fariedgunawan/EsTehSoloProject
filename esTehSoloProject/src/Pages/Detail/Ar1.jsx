import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel from "../../assets/artikel1.jpg";
import BottomBar from "../../Element/BottomBar";
const Ar1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px] pb-[50px]">
        <h2 className="text-center font-bold">“Semua Aku Dirayakan…" </h2>
        <h2 className="text-center font-bold">Begitupun Es Teh S.O.L.O Merayakanmu</h2>
        <h2 className="mt-[20px]">
          Jakarta, 20 November 2023 - Tahukah kamu lagu yang berjudul "Semua Aku Dirayakan" karya Nadin Amizah? Lagu ini menggambarkan perasaan bahagia atas semua hal yang dihargai dan dihibur oleh seseorang yang spesial. Ketika kamu sedang
          menghadapi kesulitan dan ketakutan dalam hidup ada seseorang yang mampu merayakan. Sejalan dengan pesan yang disampaikan, Es Teh S.O.L.O akan merangkul keberagaman dan keunikanmu dalam setiap tegukan.
        </h2>
        <h2 className="mt-[20px]">
          Dengan menyajikan ragam varian rasa yang menyegarkan, Es Teh S.O.L.O tidak hanya menawarkan minuman yang lezat tetapi juga mempromosikan keragaman dalam setiap rasa. Setiap tegukan merupakan perayaan akan cita rasa yang
          berbeda-beda, seiring dengan keunikan setiap orang yang menikmatinya. Es Teh S.O.L.O akan senantiasa mendukung kamu untuk merayakan identitas kamu sendiri. Seperti yang tergambar dalam lirik lagu "Semua Aku Dirayakan". Pesan yang
          disampaikan oleh lagu tersebut cocok dengan filosofi kami yaitu untuk selalu merayakan orang yang terkasih.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel} className="w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Gambar dari Instagram @estehsolo_</h2>
        </div>
        <h2 className="mt-[20px]">
          Maka dari itu Es Teh S.O.L.O ingin agar kamu dapat merayakan dirimu serta orang di sekitarmu. Melalui pembelian <span className="italic">Buy One Get One</span> kamu dapat memberikan perayaan terhadap dirimu serta berbagi dengan
          teman, kekasih ataupun kerabatmu. Dengan demikian setiap gelas Es Teh S.O.L.O yang dinikmati, dapat turut merayakan dan menghargai keberagaman yang ada di sekelilingmu.
        </h2>
        <h2 className="mt-[20px]">
          Es Teh S.O.L.O ialah bentuk simbol perayaan akan keunikan setiap individu. Terinspirasi dalam lagu berjudul "Semua Aku Dirayakan" karya Nadin Amizah. Membuat kami tersadar bahwa semua orang harus dirayakan, terkhususnya kamu
          pelanggan setia Es Teh S.O.L.O. Kami akan menemani kamu untuk merayakan keberagaman dalam segala hal.
        </h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Ar1;
