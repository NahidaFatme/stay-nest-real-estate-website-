import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
import { Pagination } from 'swiper/modules';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
const Banner = () => {
    return (
        <div className='relative'>
        <div className=" grid grid-cols-2 h-4/5 py-20 justify-center">
            <div>
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
            <div className='ml-20 justify-center'>
                <p className="text-5xl text-left font-bold">Buy or Rent Top Class Hotels, Motels, Resorts, Guesthouses From Us <br /> <span className="text-[#ff6725] text-6xl">At Best Price
                <br /><FaArrowAltCircleRight className='mt-4' /></span></p>
            </div>
        </div>
        <div className='absolute right-8 bottom-28'>
            <img src="https://i.ibb.co/nfxcyvf/Humaaans-Standing.png"  className='transform scale-x-[-1] h-[520px]'/>
        </div>
        <div className='flex gap-8 text-3xl font-semibold text-[#ff6725] justify-center mt-56'>
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
        </div>
    );
};

export default Banner;