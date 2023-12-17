import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import pressrelease from "../../assets/pressrelease.jpg";
import pressrelease2 from "../../assets/pressrelease2.jpg";
import BottomBar from "../../Element/BottomBar";
const Pr = () => {
  return (
    <div className="fea2-body bg-white min-h-screen">
      <div className="fea-2-heading bg-[#276631]">
        <Navbar />
      </div>

      <div className="fea-content px-[35px] font-epilogue text-justify mt-[20px] text-black sm:text-[20px] pb-[50px]">
        <h2 className="text-center font-bold">Kolaborasi Ter-Hype! Es Teh S.O.L.O dan Ban Ban Tea Menghadirkan Menu Jasmine Chizu Tea!</h2>
        <h2 className="mt-[20px]">
          Jakarta, 25 Oktober 2023 - Es Teh S.O.L.O, merek minuman teh khas Solo dengan cita rasa wagistel (wangi, sepet, legi, kentel) di bawah naungan PT. Esok Harapan Bangsa dengan bangga mengumumkan kolaborasi spesial mereka dengan Ban
          Ban Tea, merek minuman spesialis cheese tea ternama. Kolaborasi ini menghasilkan 'Jasmine Chizu Tea', sebuah kreasi yang memadukan cita rasa teh khas Es Teh S.O.L.O dengan topping khas chizu cream cheese yang ringan, gurih, dan
          manis dari Ban Ban Tea. Selain itu, terdapat sedikit perbedaan dalam Jasmine Chizu Tea ini, racikan tehnya merupakan gabungan dari es teh melati milik Es Teh S.O.L.O dan Jasmine Tea milik Ban Ban Tea yang membuatnya semakin unik.
        </h2>
        <h2 className="mt-[20px]">
          Mulai 1 Desember 2023 hingga 31 Januari 2024, pecinta teh di JABODETABEK akan mendapat kesempatan eksklusif untuk mencicipi 'Jasmine Chizu Tea', kreasi kolaboratif Es Teh S.O.L.O dan Ban Ban Tea. Minuman ini akan tersedia hanya di
          gerai-gerai Es Teh S.O.L.O dan Ban Ban Tea di wilayah tersebut selama dua bulan. Penawaran terbatas ini diharapkan akan menarik perhatian dan memuaskan rasa penasaran para penggemar.
        </h2>
        //gambar cover
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={pressrelease} className="w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Gambar Jasmine Chizu Tea</h2>
        </div>
        <h2 className="mt-[20px]">
          Arum Kusumo selaku pemilik Es Teh S.O.L.O menyampaikan makna dibalik kolaborasinya bersama Ban Ban Tea, "Sebenarnya Es Teh S.O.L.O selama ini terkenal dengan tehnya yang kental dan punya aroma yang khas sekali ya. Nah, saya rasa
          kolaborasi kami bersama Ban Ban Tea kali ini memberikan sentuhan modern dan membuat rasanya jadi sedikit lebih ringan, tetapi tentu saja tetap nggak menghilangkan ciri khas produk kami. Semoga aja menu kolaborasi ini dapat disukai
          oleh lebih banyak konsumen,” ungkapnya.
        </h2>
        <h2 className="mt-[20px]">
          Wenny Tanubrata selaku Chief Marketing Officer Ban Ban Tea juga memaparkan bahwa ia sangat antusias dengan kolaborasi yang diadakan. Ia mengungkapkan bahwa kolaborasi ini merupakan inovasi dari gabungan cita rasa teh tradisional
          dengan modern. “Kami sangat antusias dengan peluncuran menu kami bersama Es Teh S.O.L.O. Kami ingin menawarkan teh yang trendy, tetapi masih tetap mempertahankan warisan teh tradisional Indonesia yang kaya. Ini adalah langkah
          besar dalam perjalanan kami untuk terus berinovasi dan memberikan pengalaman minum teh yang memuaskan bagi konsumen." ujarnya.
        </h2>
        <h2 className="mt-[20px]">
          Dalam rangka kolaborasi ini, Es Teh S.O.L.O bersama Ban Ban Tea juga meluncurkan special merchandise. Di mana 30 konsumen pertama yang sudah membeli menu kolaborasi Jasmine Chizu Tea sebanyak 3 kali akan mendapatkan 1 merchandise
          limited edition berupa reusable tumbler yang juga akan disediakan di gerai Ban Ban Tea. Kolaborasi ini diharapkan dapat memperluas jangkauan pasar kedua brand, memperkenalkan Ban Ban Tea kepada konsumen setia Es Teh S.O.L.O, dan
          sebaliknya. Jangan lewatkan momen manis ini dan rasakan sendiri sensasinya!
        </h2>
        <div className="img flex flex-col items-center mt-[20px]">
          <img src={pressrelease2} className="w-[450px]" alt="" />
          <h2 className="text-[16px] mt-[10px]">Gambar Special Merchandise Tumbler</h2>
        </div>
        <h2 className="text-center font-bold ">###</h2>
        <h2 className="font-bold">Untuk informasi lebih lanjut, silakan hubungi:</h2>
        <h2 className="font-bold">Alvin Lievaldi</h2>
        <h2 className="font-bold">Public Relation Officer Es Teh S.O.L.O</h2>
        <h2 className="font-bold">No Telp : 083489675135</h2>
        <h2 className="font-bold">Email : alvinlievaldi@estehsolo.com</h2>
        <h2 className="font-bold mt-[40px]">Tentang Es Teh S.O.L.O:</h2>
        <h2 className="mt-[20px]">
          Es Teh S.O.L.O adalah brand minuman teh khas Solo dari PT. Esok Harapan Bangsa, pioner di industri Food and Beverages yang berfokus pada franchise minuman sejak 2010 dengan puluhan brand FnB yang telah diterbitkan.
        </h2>
      </div>
      <BottomBar />
    </div>
  );
};

export default Pr;
