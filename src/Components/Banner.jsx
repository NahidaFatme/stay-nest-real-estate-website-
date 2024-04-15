import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useEffect, useState } from "react";
import '../index.css';
import { Pagination } from 'swiper/modules';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import 'animate.css';
import Estate from './Estate';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
const Banner = () => {
    const [allEstate, setAllEstate] = useState([])
    useEffect(() =>{
            fetch('estates.json')
            .then(res => res.json())
            .then(data => setAllEstate(data))
    }, []);
    return (
        <div className='relative'>
            <div className=" grid grid-cols-2 h-4/5 py-20 justify-center ">
                <div className='animate__animated animate__backInLeft'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper border"
                >
                    <SwiperSlide><img src="https://i.ibb.co/6bfYG34/gh1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/LxdqL72/resort1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/Tc9Pdcx/hotel1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/JsNSQ5D/motel1.jpg"/></SwiperSlide>
                </Swiper>
                </div>
                <div className='ml-20 justify-center animate__animated  animate__backInDown'>
                    <p className="text-5xl text-left font-bold">Buy or Rent Top Class Hotels, Motels, Resorts, Guesthouses From Us <br /> <span className="text-[#ff6725] text-6xl">At Best Price
                    <br /><FaArrowAltCircleRight className='mt-4' /></span></p>
                </div>
            </div>
            <div className='absolute right-8 top-80'>
                <img src="https://i.ibb.co/nfxcyvf/Humaaans-Standing.png"  className='transform scale-x-[-1] h-[520px]'/>
            </div>
            <div className='animate__animated animate__backInLeft animate__delay-1s flex gap-8 text-3xl font-semibold text-[#ff6725] justify-center mt-56'>
                <div className='p-6 bg-[#21201e] rounded-lg flex justify-center items-center gap-3'>
                    <MdConnectWithoutContact  className='text-5xl'/>
                    <div>
                        <p className='text-left'>4.8 lac+</p>
                        <p className='text-base text-white'>Clients Served</p>
                    </div>
                </div>
                <div className='p-6 bg-[#21201e] rounded-lg flex justify-center items-center gap-3'>
                    <GiFamilyHouse className='text-5xl' />
                    <div>
                        <p className='text-left '>5.4 lac+</p>
                        <p className='text-base  text-white'> Property Onboarded</p>
                    </div>
                </div>
                <div className='p-6 bg-[#21201e] rounded-lg flex justify-center items-center gap-3'>
                    <FaUserClock className='text-5xl' />
                    <div>
                        <p className='text-left '>2000 + </p>
                        <p className='text-base  text-white'> Daily User Visit</p>
                    </div>
                </div>
            </div>
            {/* Estates */}
            <div className='mt-16'>
                <div className='text-center'><h2 className='text-3xl font-bold text-[#21201e]'>Estates</h2></div>
                <div className='animate__animated animate__fadeInRight animate__delay-2s grid grid-cols-3 gap-12 mt-10'>
                    {
                        allEstate.map(estate => <Estate key={estate.id} estate={estate}> </Estate>)
                    }
                </div>
            </div>
            {/* Using map */}
            <div className='mt-16'>
                <div className='text-center'><h2 className='text-3xl font-bold text-[#21201e] pb-12'>Find Us On Map</h2></div>
                <MapContainer center={[23.6850, 90.3563]} zoom={9} scrollWheelZoom={false} style={{width:"100%", height:400}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                </MapContainer>
            </div>
        </div>
    );
};

export default Banner;