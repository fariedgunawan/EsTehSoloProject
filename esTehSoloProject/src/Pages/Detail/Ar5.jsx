import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel5 from "../../assets/artikel5.jpg";
import BottomBar from "../../Element/BottomBar";
const Ar5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px] pb-[50px]">
        <h2 className="text-center font-bold">Uniknya Rasa Es Teh Kampoel Khas Solo</h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel5} className="w-[450px] sm:w-[500px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Ilustrasi Es Teh Kampoel</h2>
        </div>
        <h2 className="mt-[20px]">
          <span className="font-bold">Jakarta, 29 November 2023</span> - Di tengah panasnya hari di Indonesia, <span className="italic">nggak</span> ada yang lebih menyegarkan daripada menikmati segelas teh dari Es Teh S.O.L.O. Salah satu
          varian yang khas dari <span className="italic">brand</span> Es Teh S.O.L.O yang wajib kamu coba adalah Es Teh Kampoel. Meskipun sekilas terlihat mirip, tetapi Es Teh Kampoel dengan Lemon Tea berbeda{" "}
          <span className="italic">loh</span>.
        </h2>
        <h2 className="mt-[20px]">
          Tidak seperti Lemon Tea yang menggabungkan teh dengan buah lemon, Es Teh Kampoel memiliki kekhasannya tersendiri. Jika Lemon Tea dibuat dari perasan lemon yang dicampurkan dengan teh, Es Teh Kampoel merupakan perpaduan dari es teh
          dengan irisan jeruk peras atau jeruk nipis. Selain itu, Es Teh Kampoel mempunyai rasa khas segar, pekat, kental, dan sedikit sepat dari tehnya.
        </h2>
        <h2 className="mt-[20px]">
          Kata "kampoel" berasal dari bahasa Jawa "kemampul", yang artinya mengapung atau melayang-layang. Nama ini sesuai dengan karakteristik minuman ini, yang menghadirkan potongan jeruk nipis atau jeruk peras yang diiris-iris dan
          dibiarkan terinfusi dengan tehnya. Hal ini yang menjadi ciri khas minuman Es Teh Kampoel karena merujuk pada jeruk yang tidak hanya diperas, tetapi irisannya juga dimasukkan ke dalam teh saat penyajian.
        </h2>
        <h2 className="mt-[20px]">
          Apa <span className="italic">sih</span> yang membuat Es Teh Kampoel begitu istimewa? Pertama-tama, ada cita rasa yang khas dari teh asli. Di setiap tegukannya, kamu akan merasakan cita rasa teh yang pekat dan autentik. Namun, yang
          membuatnya benar-benar menonjol adalah perpaduan rasa manis yang pas dari gula pasir dan madu. Rasanya begitu seimbang, tidak terlalu manis, tetapi cukup untuk memberikan sentuhan manis yang memanjakan lidah.
        </h2>
        <h2 className="mt-[20px]">
          Es Teh Kampoel juga memberikan rasa asam yang berasal dari jeruk yang diinfuskan dalam minuman ini. Rasa jeruknya memberikan dimensi baru pada minuman ini, membuatnya lebih menyegarkan. Selain itu, jenis jeruk yang digunakan dalam
          Es Teh Kampoel juga mempengaruhi karakter rasanya.
        </h2>
        <h2 className="mt-[20px]">
          Ini adalah pilihan yang sempurna jika kamu ingin mencoba sesuatu yang berbeda dari Lemon Tea yang sudah pernah kamu coba rasanya. Tertarik untuk mencoba? Yuk, segera kunjungi gerai Es Teh S.O.L.O terdekat dan nikmati kelezatan
          minuman khas Solo ini. Es Teh Kampoel, minuman menyegarkan yang akan membuatmu ingin mencoba lagi dan lagi.
        </h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Ar5;
