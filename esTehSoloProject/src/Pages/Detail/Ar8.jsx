import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel7 from "../../assets/artikel7.jpg";
const Ar8 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px]">
        <h2 className="text-center font-bold">The Changcuters Aja Minum Es Teh S.O.LO, Masa Kamu Nggak?</h2>
        <h2 className="mt-[20px]">
          Jakarta, 2 Desember 2023 - Kamu pasti tahu dong bagaimana semangatnya musik dari The Changcuters. Nah, ada cerita menarik nih! Tanggal 1 Desember kemarin mereka mampir ke salah satu outlet Es Teh S.O.L.O yang ada di Jakarta Barat.
          Tak disangka, mereka langsung jadi penggemar berat minuman kami!
        </h2>
        <h2 className="mt-[20px]">
          Salah satu anggota The Changcuters terlihat membuat snapgram dan mengarahkan kameranya ke anggota The Changcuters lainnya yang sedang asyik menikmati Es Teh S.O.L.O mereka dan berkata, "Es Teh S.O.L.O itu juara banget, guys!
          Rasanya unik dan nyegerin. Yang bikin beda itu wangi dan pekatnya sih" Wah, tentu saja kami senang mendengar percakapan mereka. Ini membuat kami menyadari bahwa Es Teh S.O.L.O mempunyai ciri khasnya sendiri.
        </h2>
        <h2 className="mt-[20px]">
          Di sela-sela mereka menikmati minumannya, ada seorang penggemar mereka yang hanya sibuk merekam momen itu. Tidak pakai lama salah satu anggota The Changcuters lainnya langsung memberikan satu gelas Es Teh S.O.L.O kepada seorang
          fans itu. Ia juga berkata kepada fansnya, "Kita aja minum Es Teh S.O.L.O, masa kamu nggak?", ujarnya. Kami percaya kalau kamu nggak mau ketinggalan sensasi segar dan nikmatnya Es Teh S.O.L.O yang sudah membuat The Changcuters
          jatuh hati.
        </h2>
        <h2 className="mt-[20px]">
          Yuk, jadi bagian dari penggemar setia Es Teh S.O.L.O. Karena "The Changcuters aja minum, masa kamu nggak?". Rasakan sendiri kelezatan yang tidak bisa diungkapkan kata-kata dari setiap tegukan Es Teh S.O.L.O!
        </h2>
      </div>
      <div className="img flex flex-col items-center mt-[20px]">
        <a href="https://en.bloggif.com/" title="Photo Editing">
          <img src="https://data.bloggif.com/distant/user/store/e/8/3/8/9d7bc2063c8286f945aec2d12e19838e.gif" alt="Mounting created Bloggif" className="w-[400px] h-[233] sm:w-[600px] sm:h-[433px]" />
        </a>
      </div>
    </div>
  );
};

export default Ar8;
