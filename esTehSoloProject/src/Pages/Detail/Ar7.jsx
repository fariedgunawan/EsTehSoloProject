import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel7 from "../../assets/artikel7.jpg";
import BottomBar from "../../Element/BottomBar";
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
          <span className="font-bold">Jakarta, 1 Desember 2023</span> - Banyak orang yang bertanya-tanya, “Bisakah sebuah minuman benar-benar se-segar itu?” Dari pertanyaan tersebut akhirnya memunculkan banyak pendapat.{" "}
          <span className="italic">Well</span>, para pecinta teh telah memberikan kata-kata yang tak terbantahkan mengenai kelezatan dan kesegaran yang ditawarkan Es Teh S.O.L.O.
        </h2>
        <h2 className="mt-[20px]">
          Ketika kami wawancarai, salah satu penggemar setia Es Teh S.O.L.O yang sedang mengantre di <span className="italic">booth</span> kami mengungkapkan pendapatnya mengenai Es Teh S.O.L.O. “Dulu aku pikir minuman es teh yang harganya
           <span className="italic">affordable</span> itu pasti rasanya biasa aja, tapi semua itu berubah ketika aku mencoba Es Teh S.O.L.O. Rasanya tuh <span className="italic">seger</span> dan juga ngangenin!”, kata salah satu penggemar
          setia Es Teh S.O.L.O. “Setuju, Es Teh S.O.L.O enak dan <span className="italic">seger</span> banget!” ujar pembeli lain yang berada di sebelahnya menimpalkan.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel7} className="w-[400px] sm:w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Gambar dari Instagram @estehsolo_</h2>
        </div>
        <h2 className="mt-[20px]">
          Melihat tanggapan mereka dapat membuktikan bahwa Es Teh S.O.L.O adalah solusi di saat haus dan kesegaran yang sesungguhnya. Es Teh S.O.L.O akan menjadi teman setia dalam setiap kegiatanmu. Dari pelepas dahaga setelah aktivitas
          hingga menemani momenmu yang menyenangkan.
        </h2>
        <h2 className="mt-[20px]">
          Jadi, jawabannya adalah iya, mereka yang telah mencicipi Es Teh S.O.L.O membenarkan bahwa memang boleh dong se-<span className="italic">seger</span> itu! Dalam setiap gelasnya, kesegaran yang diberikan Es Teh S.O.L.O tak
          terbantahkan. Rasakan dan nikmati kesegaran yang sesungguhnya dari Es Teh S.O.L.O dan kata mereka pun akan menjadi bukti yang tak terbantahkan!
        </h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Ar7;
