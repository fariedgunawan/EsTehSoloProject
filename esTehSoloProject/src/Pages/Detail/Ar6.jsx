import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import artikel3 from "../../assets/artikel3.jpg";
const Ar6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px]">
        <h2 className="text-center font-bold">Ekspresikan Perasaanmu dengan Es Teh Solo</h2>
        <h2 className="mt-[20px]">
          Jakarta, 30 November 2023 - Ada satu hal yang seringkali terlupakan dalam kehidupan sehari-hari, yaitu kekuatan dari sebuah minuman untuk menjadi medium ekspresi yang kuat. Bukan sekedar minuman penyegar, tapi juga sebuah wadah
          untuk mengekspresikan perasaan, emosi, dan bahkan cerita. Hal ini bukan hanya tentang rasa segar yang dihadirkannya, tetapi juga kemampuannya untuk menjadi bagian dari ekspresi dirimu. Seperti saat dimana kamu tidak dapat
          mengungkapkan apa yang sebenarnya terjadi hingga kamu tidak dapat menyelami pikiranmu sendiri.
        </h2>
        <h2 className="mt-[20px]">
          Bayangkan momen saat kamu membutuhkan tenang, atau saat kamu ingin menyampaikan rasa hangatmu pada seseorang tetapi terhalang satu dan lain hal. Hingga Es Teh S.O.L.O hadir untuk memberikan lebih dari sekedar sensasi rasa dingin
          yang menyegarkan, tetapi juga sebagai pengantar pesan yang tersirat dalam setiap tegukannya. Pernahkah terlintas di pikiranmu bahwa dengan menikmati Es Teh S.O.L.O, sebenarnya kamu juga sedang menyampaikan perasaanmu? Rasanya
          manis yang lembut atau mungkin pahit yang terasa, semuanya dapat menjadi ungkapan dari apa yang sedang terjadi di dalam dirimu.
        </h2>
        <h2 className="mt-[20px]">
          Setiap gigitan es dan tetes teh yang menyejukkan, adalah bagaimana cara Es Teh S.O.L.O memahami dan mewakili perasaanmu. Bisa jadi, saat sedang senang, tegukan itu terasa lebih manis, atau ketika sedang sedih, mungkin rasanya akan
          terasa lebih pahit. Seperti itulah Es Teh S.O.L.O membantu dalam mengungkapkan apa yang ada di dalam hati. Tidak perlu kata-kata, seringkali rasa dari Es Teh S.O.L.O sudah cukup untuk menggambarkan apa yang sedang kamu rasakan.
        </h2>
        <h2 className="mt-[20px]">
          Menurut kami, ini adalah keajaiban dari segelas Es Teh S.O.L.O. Kemampuannya untuk menjadi bahasa yang universal tanpa harus mengucapkan sepatah kata pun. Jadi, tahukah kamu sekarang? Es Teh S.O.L.O tidak hanya sebuah minuman,
          tetapi juga cermin dari perasaanmu yang bisa diekspresikan dalam setiap tegukannya. Rasakanlah setiap sensasinya dan ekspresikan perasaanmu dengan Es Teh S.O.L.O!
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={artikel3} className="w-[450px] sm:w-[500px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ar6;
