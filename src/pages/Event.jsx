import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Video from "../assets/EventVideo.mp4";
import Sponsor1 from "../assets/s1.jpg";
import Sponsor2 from "../assets/s2.jpg";
import Sponsor3 from "../assets/s3.jpg";
import Sponsor4 from "../assets/s4.jpg";
import Sponsor5 from "../assets/s5.jpg";
import Sponsor6 from "../assets/s6.jpg";
import Guests1 from "../assets/g1.jpg";
import Guests2 from "../assets/g2.jpg";
import Guests3 from "../assets/g3.jpg";
import Guests4 from "../assets/g4.jpg";
import Guests5 from "../assets/g5.jpg";
import Guests6 from "../assets/g6.jpg";
import GMaps from "../assets/gmaps.png";
import Event1 from "../assets/event1.jpg";
import Event2 from "../assets/event2.jpg";
import Event3 from "../assets/event3.jpg";
import Event4 from "../assets/event4.jpg";
import Event5 from "../assets/event5.jpg";
import { IconMapPinFilled } from '@tabler/icons-react';
import HomeCard from "../component/HomeCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import OtherEventCard from "../component/OtherEventCard";

const Event = () => {
  const [name, setName] = useState('');
  const [campus, setCampus] = useState('');

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000); // Adjust the interval (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    setName(localStorage.getItem('name'));
    setCampus(localStorage.getItem('campus'));
  }, [])

  return <>
    {
      name != undefined && <Header username={name} campus={campus} />
    }

    <div className='h-[26rem] w-full m-auto relative group'>
      <video className="w-full h-[26rem]" loop autoPlay muted style={{ objectFit: 'cover' }}>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="grid grid-cols-6 gap-4 px-24 my-5">
      <div className="col-start-1 col-span-6">
        <div className=" bg-white rounded border-0 p-5 flex items-center">
          <div className="">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">INNOWAVE 2023</h5>
            <p className="mb-3 text-sm text-gray-700">Innowave 2023 is the official Entrepreneurship Summit of CHRIST
              (Deemed to be University), a two-day long event encompassing
              startups, incubation, entrepreneurship and everything in between.  It will bring to the fore entrepreneurs, innovators,
              incubators, speakers and investors to celebrate and bolster the
              entrepreneurial ecosystem.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="h-14 button-color text-2xl rounded text-white px-12 ">Book</button>
            <p className="text-center text-gray-600"><span className="font-bold">₹ 300</span> onwards</p>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-2">
        <div className=" bg-white rounded border-0 p-5">
          <div className="">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Christ University, Central Campus</h5>
            <p className="mb-3 text-sm text-gray-700">Dharmaram College Post, Hosur Road, Bengaluru - 560029,
              Karnataka, India.</p>
            <a href="https://www.google.com/maps/dir//WHQX%2B2JG,+road,,+Bannerghatta-Marigowda+Turn+Rd,+near+kidwai+hospital,+Lakkasandra,+Laljinagar,+Hombegowda+Nagar,+Bengaluru,+Karnataka+560029/@12.9375376,77.5166803,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae15b0e03a8901:0xc14a0e9fe42677c1!2m2!1d77.5990896!2d12.9375779?entry=ttu"
              target="_blank" rel="noopener noreferrer"
              className="flex justify-center gap-2 p-2 mt-5 rounded w-full bg-gray-100 hover:bg-gray-200 transition-all duration-150">
              <img src={GMaps} className="h-8" />
              {/* <IconMapPinFilled size={42} /> */}
              <p className="text-xs font-semibold text-left">Locate on <br />Google Maps</p>
            </a>
          </div>
        </div>


      </div>
      <div className="col-start-2 col-span-3 row-span-8 ">
        <div className=" bg-white rounded border-0 p-5 h-full">
          <div className="" id="event-main">
            <h5 className="text-2xl font-bold tracking-tight text-gray-700">Chief Guests</h5>
            <div className="grid grid-cols-3 justify-items-center md:grid-cols-3 gap-5 pt-3">
              <div className="flex items-center gap-2 font-semibold"><img src={Guests1} className="rounded-full shadow w-24 h-24 bg-cover" /><p>SS Rajmouli</p></div>
              <div className="flex items-center gap-2 font-semibold"><img src={Guests2} className="rounded-full shadow w-24 h-24 bg-cover" /><p>Vikas D Nahar</p></div>
              <div className="flex items-center gap-2 font-semibold"><img src={Guests3} className="rounded-full shadow w-24 h-24 bg-cover" /><p>Nayana Premnath</p></div>
              <div className="flex items-center gap-2 font-semibold"><img src={Guests4} className="rounded-full shadow w-24 h-24 bg-cover" /><p>Belson Coutinho</p></div>
              <div className="flex items-center gap-2 font-semibold"><img src={Guests5} className="rounded-full shadow w-24 h-24 bg-cover" /><p>Vaibhav Sisnity</p></div>
              <div className="flex items-center gap-2 font-semibold"><img src={Guests6} className="rounded-full shadow w-24 h-24 bg-cover" /><p>Niranjan Hiranandani</p></div>
            </div>

            <h5 className="text-2xl font-bold tracking-tight text-gray-700 mt-14 mb-5">You may also like...</h5>
            <Swiper
              slidesPerView={1}
              slidesPerGroup={4}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              speed={1000}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><OtherEventCard imgSrc={Event1} name="PRAYAS - Intercollege Commerce Fest" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event2} name="ARANGAM - Cultural Confluence 2024" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event3} name="EXODUS 2024" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event4} name="MERAKI - Interclass Competition" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event5} name="FUTURE MUN" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event1} name="PRAYAS - Intercollege Commerce Fest" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event2} name="ARANGAM - Cultural Confluence 2024" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event3} name="EXODUS 2024" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event4} name="MERAKI - Interclass Competition" /></SwiperSlide>
              <SwiperSlide><OtherEventCard imgSrc={Event5} name="FUTURE MUN" /></SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow scale-50">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow scale-50">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="col-end-7 col-span-2">
        <div className=" bg-white rounded border-0 p-5">
          <div className="">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">12th | 13th Decemeber 2023</h5>
            <p className="my-3 text-sm text-gray-700 font-semibold leading-6">
              1st Round:  09:00 AM - 01:00 PM <br />
              Lunch time:  01:00 PM - 02:00 PM <br />
              2nd Round: 02:00 PM - 05:00 PM <br />
            </p>
          </div>
        </div>

        <div className=" bg-white rounded border-0 p-5 mt-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-700">Sponsors</h5>
          <div className="grid grid-cols-3 justify-items-center gap-5 pt-3 font-semibold">
            <div className="flex flex-col items-center"><img src={Sponsor1} className="rounded-full shadow h-14" /><p className="text-sm">StartupNews</p></div>
            <div className="flex flex-col items-center"><img src={Sponsor2} className="rounded-full shadow h-14" /><p className="text-sm">StartupNews</p></div>
            <div className="flex flex-col items-center text-center"><img src={Sponsor3} className="rounded-full shadow h-14" /><p className="text-sm">Cafe Coffee Day</p></div>
            <div className="flex flex-col items-center"><img src={Sponsor4} className="rounded-full shadow h-14" /><p className="text-sm">rescript</p></div>
            <div className="flex flex-col items-center"><img src={Sponsor5} className="rounded-full shadow h-14" /><p className="text-sm">StartupNews</p></div>
            <div className="flex flex-col items-center"><img src={Sponsor6} className="rounded-full shadow h-14" /><p className="text-sm">FALHARI</p></div>
          </div>
        </div>
      </div>

    </div>

    <Footer />
  </>
}

export default Event;