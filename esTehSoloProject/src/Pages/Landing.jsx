import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Element/Navbar";
import ScrollMenu from "../Element/ScrollMenu";
import explore from "../assets/explore.png";
import join from "../assets/join.png";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import artis1 from "../assets/artis1.jpg";
import artis2 from "../assets/artis2.jpg";
import artis3 from "../assets/artis3.jpg";
import BottomBar from "../Element/BottomBar";
const Landing = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    const slides = galleryRef.current.querySelectorAll(".carousel-item");

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const intervalId = setInterval(nextSlide, 3000); // Change 5000 to the desired interval in milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="landing-body bg-white min-h-screen">
      <div className="landing-head bg-[#276631] pb-[50px] sm:pb-0">
        <Navbar />
        <ScrollMenu />
      </div>
      <div className="gelombang-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#276631" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,80C640,107,800,181,960,176C1120,171,1280,85,1360,42.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      {/*explore drinks section */}
      <div className="explore-drinks flex justify-center sm:-mt-[120px] pb-[40px] px-[35px]">
        <div className="explore-container flex flex-col items-center sm:flex-row sm:gap-[200px]">
          <div className="explore-caption pb-[20px] text-center sm:text-left">
            <h2 className="text-[#276631] font-epilogue font-bold text-[18px] sm:text-[40px] ">Selamat Datang di Es Teh S.O.L.O</h2>
            <h2 className="text-[#276631] font-epilogue mt-[10px] font-semibold text-[14px] text-center sm:text-[20px] sm:w-[570px] sm:text-left">
              Bermula dari sebuah tradisi yang terus menguatkan eksistensi. Adalah wangi, sepet, legi, kentel atau orang-orang menyebutnya "Wasgitel". Rasa otentik teh racikan asli perkebunan teh dari SOLO ini memberikan kesegeran dan rasa
              yang khas tiada duanya
            </h2>
            <button className="btn px-[20px] py-[10px] bg-[#276631] mt-[10px] text-white font-epilogue rounded-xl sm:text-[20px]" onClick={() => navigate("/menu")}>
              Explore Drinks
            </button>
          </div>
          <img src={explore} className="w-[350px] sm:w-[450px]" alt="" />
        </div>
      </div>
      {/*explore drinks section */}

      {/*join estehsolo */}
      <div className="gelombang-2 sm:-mt-[200px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#276631"
            fill-opacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,197.3C640,213,800,267,960,277.3C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="join-section font-epilogue text-white px-[35px] bg-[#276631] pt-[30px] -mt-[1px]">
        <div className="join-container flex flex-col items-center sm:flex-row-reverse sm:gap-[300px]">
          <div className="join-caption pb-[20px] text-center sm:text-left">
            <h2 className="font-semibold sm:text-[20px]">OWN A FRANCHISE</h2>
            <h2 className="mt-[10px] font-bold text-[30px] text-center sm:text-[60px] sm:w-[600px] sm:text-left">Gabung Kemitraan Es Teh S.O.L.O</h2>
            <h2 className="text-[14px] text-center sm:w-[530px] sm:text-left sm:text-[20px]">
              Es Teh S.O.L.O salah satu kemitraan yang sangat populer di Indonesia. Konsep kemitraan yang mudah dan menguntungkan. Kesuksesan Es Teh S.O.L.O memberikan dampak positif bagi banyak orang
            </h2>
            <button className="btn px-[20px] py-[10px] mt-[10px] rounded-xl sm:text-[20px] bg-white text-[#276631]" onClick={() => navigate("/franchise")}>
              Learn More →
            </button>
          </div>
          <img src={join} className="w-[350px] sm:w-[500px]" alt="" />
        </div>
      </div>

      <div className="gelombang-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#276631" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      {/*join estehsolo */}

      {/* Media gallery esteh */}
      <div className="media-gallery-container font-epilogue px-[35px] flex justify-center">
        <div className="media-gallery-content flex-col flex items-center">
          <h2 className="text-[#276631] font-bold text-[20px] sm:text-[30px]">Media Gallery Es Teh S.O.L.O</h2>
          <div className="carousel w-full rounded-xl mt-[20px] sm:w-[60rem]" ref={galleryRef}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={`slide${index + 1}`} className={`carousel-item relative w-full ${currentSlide === index ? "visible" : "hidden"}`} style={{ opacity: currentSlide === index ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
                <img src={index === 0 ? gallery1 : gallery2} className="w-full" alt={`Slide ${index + 1}`} />
              </div>
            ))}
            {/* Add more carousel items as needed */}
          </div>
          <h2 className="text-[16px] text-[#276631] text-center font-medium leading-5 mt-[20px] sm:w-[900px]">
            Berasal dari kebun teh berkualitas yang di panen oleh petani-petani terbaik. Menghasilkan kualitas teh yang tidak tertandingi. Es Teh S.O.L.O bersama D.E.S.A hadir untuk konsumen Indonesia dan berkomitmen untuk mengutamakan mutu
            dan cita rasa tiap tetes tehnya.
          </h2>
        </div>
      </div>
      {/* Media gallery esteh */}

      {/*artist in frame */}
      <div className="artis-container font-epilogue flex justify-center text-black px-[35px]">
        <div className="artis-content flex flex-col items-center">
          <h2 className="text-[#276631] font-bold text-[20px] sm:text-[30px] mt-[30px]">Artist in Frame</h2>
          <div className="carousel w-full rounded-xl mt-[20px]  sm:w-[40rem]" ref={galleryRef}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={`slide${index + 1}`} className={`carousel-item relative w-full ${currentSlide === index ? "visible" : "hidden"}`} style={{ opacity: currentSlide === index ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
                <img src={index === 0 ? artis1 : index === 1 ? artis2 : index === 2 ? artis3 : index === 3} className="w-full" alt={`Slide ${index + 1}`} />
              </div>
            ))}
            {/* Add more carousel items as needed */}
          </div>
        </div>
      </div>
      {/*artist in frame */}

      <BottomBar />
    </div>
  );
};

export default Landing;
