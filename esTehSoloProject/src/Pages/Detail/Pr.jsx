import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import pressrelease from "../../assets/pressrelease.jpg";
import pressrelease2 from "../../assets/pressrelease2.jpg";
import estehsolonobg from "../../assets/estehsolonobg.png";
import BottomBar from "../../Element/BottomBar";
const Pr = () => {
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify text-black sm:text-[20px] pb-[50px]">
        <div className="title flex justify-between items-center mt-[20px]">
          <h2 className="italic font-bold">FOR IMMEDIATE RELEASE</h2>
          <img src={estehsolonobg} className="w-[150px] sm:w-[200px]" alt="" />
        </div>
        <h2 className="text-center font-bold">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
        <h2 className="mt-[20px]">
          <span className="font-bold">Jakarta, 25 Oktober 2023</span> - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa wagistel (wangi, sepet, legi, kentel) di bawah naungan PT. Esok Harapan Bangsa dengan bangga mengumumkan
          kolaborasi spesial mereka dengan Ban Ban Tea, merek minuman spesialis <span className="italic">cheese tea</span> ternama. Kolaborasi ini menghasilkan 'Jasmine Chizu Tea', sebuah kreasi yang memadukan cita rasa teh khas Es Teh
          S.O.L.O dengan <span className="italic">topping </span>
          khas <span className="italic">chizu cream cheese</span> yang ringan, gurih, dan manis dari Ban Ban Tea. Selain itu, terdapat sedikit perbedaan dalam Jasmine Chizu Tea ini, racikan tehnya merupakan gabungan dari Jasmine Tea milik
          Es Teh S.O.L.O dan Jasmine Tea milik Ban Ban Tea yang membuatnya semakin unik.
        </h2>
        <h2 className="mt-[20px]">
          Mulai 1 Desember 2023 hingga 31 Januari 2024, pecinta teh di JABODETABEK akan mendapat kesempatan eksklusif untuk mencicipi 'Jasmine Chizu Tea', kreasi kolaboratif Es Teh S.O.L.O dan Ban Ban Tea. Minuman ini akan tersedia hanya di
          gerai-gerai Es Teh S.O.L.O dan Ban Ban Tea di wilayah tersebut selama dua bulan. Penawaran terbatas ini diharapkan akan menarik perhatian dan memuaskan rasa penasaran para penggemar.
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={pressrelease} className="w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Gambar Jasmine Chizu Tea</h2>
        </div>
        <h2 className="mt-[20px]">
          Arum Kusumo selaku pemilik Es Teh S.O.L.O menyampaikan makna dibalik kolaborasinya bersama Ban Ban Tea, "Sebenarnya Es Teh S.O.L.O selama ini terkenal dengan tehnya yang kental dan punya aroma yang khas sekali ya. Nah, saya rasa
          kolaborasi kami bersama Ban Ban Tea kali ini memberikan sentuhan <span className="italic">modern</span> dan membuat rasanya jadi sedikit lebih ringan, tetapi tentu saja tetap <span className="italic">nggak</span> menghilangkan
          ciri khas produk kami. Semoga aja menu kolaborasi ini dapat disukai oleh lebih banyak konsumen,” ungkapnya.
        </h2>
        <h2 className="mt-[20px]">
          Wenny Tanubrata selaku <span className="italic">Chief Marketing Officer</span> Ban Ban Tea juga memaparkan bahwa ia sangat antusias dengan kolaborasi yang diadakan. Ia mengungkapkan bahwa kolaborasi ini merupakan inovasi dari
          gabungan cita rasa teh tradisional dengan <span className="italic">modern</span>. “Kami sangat antusias dengan peluncuran menu kami bersama Es Teh S.O.L.O. Kami ingin menawarkan teh yang <span className="italic">trendy</span>,
          tetapi masih tetap mempertahankan warisan teh tradisional Indonesia yang kaya. Ini adalah langkah besar dalam perjalanan kami untuk terus berinovasi dan memberikan pengalaman minum teh yang memuaskan bagi konsumen." ujarnya.
        </h2>
        <h2 className="mt-[20px]">
          Dalam rangka kolaborasi ini, Es Teh S.O.L.O bersama Ban Ban Tea juga meluncurkan <span className="italic">special merchandise</span>. Di mana 30 konsumen pertama yang sudah membeli menu kolaborasi Jasmine Chizu Tea sebanyak 3 kali
          akan mendapatkan 1 <span className="italic">merchandise limited edition</span> berupa <span className="italic">reusable tumbler</span> yang juga akan disediakan di gerai Ban Ban Tea. Kolaborasi ini diharapkan dapat memperluas
          jangkauan pasar kedua <span className="italic">brand</span>, memperkenalkan Ban Ban Tea kepada konsumen setia Es Teh S.O.L.O, dan sebaliknya. Jangan lewatkan momen manis ini dan rasakan sendiri sensasinya!
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={pressrelease2} className="w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">
            Gambar <span className="italic">Special Merchandise</span> Tumbler
          </h2>
        </div>
        <h2 className="text-center font-bold mt-[50px] ">###</h2>
        <h2 className="font-bold mt-[50px]">Untuk informasi lebih lanjut, silakan hubungi:</h2>
        <h2>Alvin Lievaldi</h2>
        <h2>Public Relation Officer Es Teh S.O.L.O</h2>
        <h2>No Telp : 083489675135</h2>
        <h2>Email : alvinlievaldi@estehsolo.com</h2>
        <h2 className="font-bold mt-[40px]">Tentang Es Teh S.O.L.O:</h2>
        <h2 className="mt-[20px]">
          Es Teh S.O.L.O adalah <span className="italic">brand</span> minuman teh khas Solo dari PT. Esok Harapan Bangsa, <span className="italic">pioneer</span> di industri <span className="italic">Food and Beverages</span> yang berfokus
          pada franchise minuman sejak 2010 dengan puluhan <span className="italic">brand FnB</span> yang telah diterbitkan.
        </h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Pr;
