import { useRef, useState } from "react";
import Header from "../component/Header";
import HomeCard from "../component/HomeCard";
import { useEffect } from "react";
import Modal from "../component/Modal";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import Event1 from "../assets/event1.jpg";
import Event2 from "../assets/event2.jpg";
import Event3 from "../assets/event3.jpg";
import Event4 from "../assets/event4.jpg";
import Event5 from "../assets/event5.jpg";
import Event6 from "../assets/event6.jpg";
import Event7 from "../assets/event7.jpg";
import Event8 from "../assets/event8.jpg";
import Event9 from "../assets/event9.jpg";
import Event10 from "../assets/event10.jpg";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.jpg";
import Cat1 from "../assets/cat1.jpg";
import Cat2 from "../assets/cat2.jpg";
import Cat3 from "../assets/cat3.jpg";
import Cat4 from "../assets/cat4.jpg";
import Cat5 from "../assets/cat5.jpg";
import Cat6 from "../assets/cat6.jpg";
import Cat7 from "../assets/cat7.jpg";
import Cat8 from "../assets/cat8.jpg";
import Cat9 from "../assets/cat9.jpg";
import Cat10 from "../assets/cat10.jpg";
import Ad from "../assets/ad.jpg";
// import { UilAngleRightB, UilAngleLeftB } from '@iconscout/react-unicons';
import HomeCarousel from "../component/HomeCarousel";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Sidebar from "../component/SideBar";
import Rewards from "../component/Rewards";

const Home = () => {
  const navigate = useNavigate();
  const [campus, setCampus] = useState('None');
  const [loginBox, setLoginBox] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUserName] = useState('Guest');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    if (!isLogin && campus != 'None' && localStorage.getItem('name') == undefined) setLoginBox(true);
  }, [campus])

  useEffect(() => {
    if (localStorage.getItem('name') != undefined && localStorage.getItem('campus') != undefined) {
      setCampus(localStorage.getItem('campus'));
      setUserName(localStorage.getItem('name'));
    } else {
      setLoginBox(true);
    }
  }, [])

  let slides = [
    Banner1, Banner2, Banner3
  ];

  function handleLogin(e) {
    e.preventDefault();
    setIslogin(true);
    setLoginBox(false);
    console.log(name);
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    setUserName(name);
  }

  return <>
    <Header username={username} campus={campus} setIsSidebar={setIsSidebar} setShowModal={setShowModal} />

    <Modal setCampus={setCampus} showModal={showModal} setShowModal={setShowModal} />

    {isSidebar && <Sidebar setIsSidebar={setIsSidebar} />}

    {loginBox &&
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="opacity-25 fixed inset-0 bg-black"></div>
        <div className="relative my-6 mx-auto w-96 max-w-6xl ">
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-lg">

            <form className="max-w-sm mx-auto p-10 w-full" onSubmit={(e) => handleLogin(e)}>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="full name" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} required />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Phone No.</label>
                <input type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1234567890" onChange={(e) => setPhone(e.target.value)} value={phone} required />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setPass(e.target.value)} value={pass} required />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 mt-5 mb-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" >Submit</button>

              <p className="text-xs text-center">I agree to <span className="underline">Terms & Conditions</span></p>
            </form>

          </div>
        </div>
      </div>
    }

    <HomeCarousel slides={slides} />

    <div className="px-28 py-10" id="events">
      <div className="flex items-baseline justify-between text-sm font-semibold mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-gray-700">Recommended Events</h1>
        <p className="text-orange-500">Many more...</p>
      </div>

      <Swiper
        slidesPerView={1}
        slidesPerGroup={5}
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><HomeCard imgSrc={Event1} name="PRAYAS - Intercollege Commerce Fest" loc="Christ Central Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event2} name="ARANGAM - Cultural Confluence 2024" loc="Christ Bannerghatta Road Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event3} name="EXODUS 2024" loc="Christ Kengeri Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event4} name="MERAKI - Interclass Competition" loc="Christ Pune Lavasa Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event5} name="FUTURE MUN" loc="Christ Delhi NCR Off Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event6} name="AROME - Annual Food Fest" loc="Christ Central Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event7} name="CUIZ - National Quiz Championship" loc="Christ Kengeri Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event8} name="MOCK MUN" loc="Christ Bannerghatta Road Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event9} name="BMUN 2024" loc="Christ Yeshwanthpur Campus" /></SwiperSlide>
        <SwiperSlide><HomeCard imgSrc={Event10} name="BLOSSOMS - Valedictory Ceremony" loc="Christ Delhi NCR Off Campus" /></SwiperSlide>

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


    <div className="w-full rounded-3xl px-28 py-8 relative">
      <img className="w-full rounded-xl" src={Ad} />
      <span className="absolute top-10 left-24 bg-black text-white text-sm p-1 rounded font-bold">AD</span>
    </div>


    <div className="px-28 py-10" id="categories">
      <div className="flex items-baseline justify-between text-sm font-semibold mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-gray-700">Explore Event Categories</h1>
        <p className="text-orange-500">Many more...</p>
      </div>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={5}
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat1} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat2} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat3} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat4} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat5} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat6} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat7} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat8} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat9} /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat10} /></SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow scale-50">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow scale-50">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
      {/* <div className="grid grid-cols-3 justify-items-center md:grid-cols-5 gap-5 pt-3">
        <img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat1} />
        <img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat2} />
        <img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat3} />
        <img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat4} />
        <img className="rounded-lg w-60 cursor-pointer brightness-90 hover:scale-95 transition-all duration-150" src={Cat5} />
      </div> */}
    </div>



    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
      <span className="sr-only">Open sidebar</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
    </button>

    <Footer />
  </>
}

export default Home;