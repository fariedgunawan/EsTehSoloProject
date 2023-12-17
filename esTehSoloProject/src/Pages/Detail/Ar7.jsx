import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel7 from "../../assets/artikel7.jpg";
const Ar7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px]">
        <h2 className="text-center font-bold">Kata Mereka Emang Boleh Se-seger Itu?</h2>
        <h2 className="mt-[20px]">
          Jakarta, 1 Desember 2023 - Banyak orang yang bertanya-tanya, “Bisakah sebuah minuman benar-benar se-segar itu?” Dari pertanyaan tersebut akhirnya memunculkan banyak pendapat. Well, para pecinta teh telah memberikan kata-kata yang
          tak terbantahkan mengenai kelezatan dan kesegaran yang ditawarkan Es Teh S.O.L.O.
        </h2>
        <h2 className="mt-[20px]">
          Ketika kami wawancarai, salah satu penggemar setia Es Teh S.O.L.O yang sedang mengantre di booth kami mengungkapkan pendapatnya mengenai Es Teh S.O.L.O. “Dulu aku pikir minuman es teh yang harganya affordable itu pasti rasanya
          biasa aja, tapi semua itu berubah ketika aku mencoba Es Teh S.O.L.O. Rasanya tuh seger dan juga ngangenin!”, kata salah satu penggemar setia Es Teh S.O.L.O. “Setuju, Es Teh S.O.L.O enak dan seger banget!” ujar pembeli lain yang
          berada di sebelahnya menimpalkan.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel7} className="w-[400px] sm:w-[450px]" alt="" />
        </div>
        <h2 className="mt-[20px]">
          Melihat tanggapan mereka dapat membuktikan bahwa Es Teh S.O.L.O adalah solusi di saat haus dan kesegaran yang sesungguhnya. Es Teh S.O.L.O akan menjadi teman setia dalam setiap kegiatanmu. Dari pelepas dahaga setelah aktivitas
          hingga menemani momenmu yang menyenangkan.
        </h2>
        <h2 className="mt-[20px]">
          Jadi, jawabannya adalah iya, mereka yang telah mencicipi Es Teh S.O.L.O membenarkan bahwa memang boleh dong se-seger itu! Dalam setiap gelasnya, kesegaran yang diberikan Es Teh S.O.L.O tak terbantahkan. Rasakan dan nikmati
          kesegaran yang sesungguhnya dari Es Teh S.O.L.O dan kata mereka pun akan menjadi bukti yang tak terbantahkan!
        </h2>
      </div>
    </div>
  );
};

export default Ar7;
