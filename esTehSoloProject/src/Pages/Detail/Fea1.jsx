import BottomBar from "../../Element/BottomBar";
import Navbar from "../../Element/Navbar";
import fea1pot from "../../assets/fea1pot.jpg";
import React, { useEffect } from "react";
const Fea1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fea1-body bg-white min-h-screen">
      <div className="fea-1-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px] pb-[50px]">
        <h2 className="text-center font-bold">Bikin Heboh Warganet! Seorang Wanita Dilamar Kekasihnya Menggunakan Es Teh S.O.L.O</h2>
        <h2 className="mt-[20px]">
          <span className="font-bold">Jakarta, 17 November 2023</span> - Sebuah momen romantis dan kreatif baru-baru ini membuat heboh warganet, ketika seorang wanita di Jakarta dilamar kekasihnya dengan menggunakan kejutan unik yaitu Es
          Teh S.O.L.O. Kisah ini dimulai ketika Kevin Putra Pratama (28), seorang pria muda yang tinggal di Jakarta Barat, merencanakan cara spesial untuk melamar Felicia Putri (27), kekasihnya yang sangat dicintainya. Kevin yang tahu bahwa
          Felicia sangat menyukai Es Teh S.O.L.O kemudian memutuskan untuk membuat momen lamaran mereka tidak terlupakan dengan menggabungkan minuman favorit kekasihnya tersebut dalam rencananya. Kegiatan tersebut tidak hanya menjadi
          pembicaraan di antara warganet, tetapi juga mendapat sorotan luas di media sosial.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={fea1pot} className="w-[350px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Ilustrasi Kevin melamar Felicia</h2>
        </div>

        <h2 className="mt-[20px] font-semibold">Perjalanan Cinta Kevin & Felicia</h2>
        <h2 className="mt-[20px]">
          Sebelumnya Kevin Putra Pratama adalah siswa yang duduk di bangku SD yang sama dengan Felicia Putri. Semenjak SD, Felicia gemar sekali membawa es teh manis yang dibekali oleh sang Ayah untuk ke sekolah. Alih-alih meminumnya
          sendiri, Felicia senang sekali mengajak Kevin untuk ikut minum es teh manis bersamanya.
        </h2>
        <h2 className="mt-[20px]">
          Pada saat menginjak bangku SMA, Kevin baru memiliki keberanian untuk menyatakan perasaannya. Kevin menembak Felicia saat jam istirahat, dimana saat itu Felicia sedang asik menikmati es teh manisnya. Mulai dari hari itu kisah cinta
          mereka dimulai.
        </h2>
        <h2 className="mt-[20px]">
          Menginjak usia dewasa Kevin pun memantapkan niatnya untuk membuat momen yang mengesankan untuk melamar Felicia. Kevin mengingat momen dimana Ia menembak Felicia disaat perempuan itu sedang meminum es teh manisnya. Dengan cermat,
          ia merencanakan perjalanan cinta mereka yang akan diakhiri dengan lamaran romantis. Kevin tahu betul bahwa Felicia sangat menyukai minuman Es Teh S.O.L.O, minuman khas daerah Solo yang memiliki cita rasa unik dan spesial. Dalam
          perjalanan ini, Kevin menyelipkan kejutan yang unik untuk Felicia, yaitu melamar Felicia dengan Es Teh S.O.L.O.
        </h2>
        <h2 className="mt-[20px] font-semibold">Momen Kevin Melamar Felicia di Central Park Mall</h2>
        <h2 className="mt-[20px]">
          Pagi itu, Felicia diundang ke <span className="italic">restaurant</span> yang tersedia di Central Park Mall, Jakarta yang menjadi saksi bisu akan awal cerita cinta mereka. Begitu tiba di sana, Felicia langsung terkejut ketika
          melihat meja yang dihiasi cantik dengan bunga, lilin, dan segelas Es Teh S.O.L.O yang disajikan dengan indah. Kevin lalu menggenggam tangan Felicia dan dengan tulus berkata, "Seperti Es Teh S.O.L.O yang menyegarkan, kehadiranmu
          membuat hidupku semakin indah.
          <span className="italic">Would you be my Es Teh S.O.L.O forever?</span>" Felicia yang terkejut dan senang, akhirnya menjawab dengan senyuman tulus, <span className="italic">"Yes, I do!"</span>
        </h2>
        <h2 className="mt-[20px]">
          Momen indah tersebut tidak hanya terekam dalam ingatan mereka berdua, tetapi juga terekam dalam video yang kemudian diunggah oleh Kevin ke media sosial. Video itu pun menjadi viral dan mendapat banyak{" "}
          <span className="italic">likes</span>, komentar, dan <span className="italic">share </span>
          dari warganet yang terinspirasi oleh kreativitas dan keunikan lamaran tersebut. Netizen pun memberikan berbagai komentar positif, mengapresiasi cara Kevin menggabungkan cinta dan minuman favorit Felicia dalam momen lamaran yang
          romantis dan menyentuh hati. Momen Es Teh S.O.L.O dalam lamaran ini bukan hanya menjadi memori indah bagi kedua sejoli, tetapi juga menunjukkan bahwa kreativitas dalam melamar dapat membuat momen tersebut menjadi lebih istimewa
          dan berkesan.{" "}
        </h2>
        <h2 className="mt-[20px] font-semibold">Ada Cerita Apa Dibalik Es Teh S.O.L.O?</h2>
        <h2 className="mt-[20px]">
          Tentunya Felicia menjawab pertanyaan warganet yang penasaran dengan kisah dibalik Es Teh S.O.L.O yang disukainya. “Aku sendiri emang dari SD bener bener sudah suka banget sama es teh manis, karena mendiang Ayahku ahli dalam
          membuat es teh manis. Beranjak dewasa aku sadar kalau esensi dan cita rasa es teh manis yang aku suka itu ada di Es Teh S.O.L.O. Rasa yang khas dan aroma melatinya membuatku teringat dengan es teh manis buatan ayahku, mungkin itu
          alasan aku sangat menyukai Es Teh S.O.L.O.” ujar Felicia menanggapi pertanyaan.
        </h2>
        <h2 className="mt-[20px]">
          Kevin sendiri mengakui bahwa cita rasa dari Es Teh S.O.L.O juga menjadi pengingat dalam dirinya. Tidak hanya teringat dengan rasa es teh manis yang segar dan masa kecilnya. Tetapi juga teringat dengan perempuan yang dicintainya
          yaitu Felicia.
        </h2>
        <h2 className="mt-[20px]">
          “Saya rasa Es Teh S.O.L.O jadi hal yang sederhana buat diingat, tapi untuk jenjang masa depan hal ini jadi momen besar buat kami. saya akan mengundang pihak Es Teh S.O.L.O. buat <span className="italic">booth</span> pilihan saya
          di <span className="italic">wedding</span> nanti” Ujar Kevin Putra Pratama secara bangga.
        </h2>
        <h2 className="mt-[20px]">
          Dalam momen spesial ini Pihak Es Teh S.O.L.O melakukan <span className="italic">follow up</span> kembali terkait pernyataan Kevin Putra Pratama dalam memilih <span className="italic">brand</span> Es Teh S.O.L.O untuk{" "}
          <span className="italic">booth</span> di pernikahannya nanti. Arum Kusumo selaku <span className="italic">founder</span> Es Teh S.O.L.O memberikan ucapan selamat serta memberikan penawaran khusus berupa potongan harga dalam opsi
          paket, harga sewa, dan fasilitas yang termasuk dalam layanan <span className="italic">booth</span> <span className="italic">brand</span> Es Teh S.O.L.O untuk menyemarakkan acara pernikahan Kevin Putra Pratama dan Felicia Putri.
        </h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Fea1;
