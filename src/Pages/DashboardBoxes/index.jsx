import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FiGift } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { IoPieChartOutline } from "react-icons/io5";
import { PiBankDuotone } from "react-icons/pi";
import { TbBrandProducthunt } from "react-icons/tb";




const DashboardBoxes = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                modules={[Navigation]}
                className="dashboardBoexesSlider"
                navigation={true}
            >

                <SwiperSlide>
                    <div className="box bg-blue-500 p-5 hover:opacity-85 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <FiGift className='text-[40px] text-white' />
                        <div className="info w-[70%] ">

                            <h3 className='text-white'>New Orders</h3>
                            <b className='text-white'>1,390</b>

                        </div>
                        <IoStatsChart className='text-[40px] text-white' />
                      
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="box p-5 bg-green-600 hover:opacity-85 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <IoPieChartOutline  className='text-[50px] text-white ' />
                        <div className="info w-[70%] ">

                            <h3 className='text-white'>Sales</h3>
                            <b className='text-white'>$57,890</b>

                        </div>
                        <IoStatsChart className='text-[50px] text-white' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="box p-5 bg-red-500 hover:opacity-85 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <PiBankDuotone   className='text-[40px] text-white' />
                        <div className="info w-[70%] ">

                            <h3 className='text-white'>Revenue</h3>
                            <b className='text-white'>$12,390</b>

                        </div>
                        <IoStatsChart className='text-[40px] text-white' />
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="box p-5 bg-blue-500 hover:opacity-85 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <TbBrandProducthunt  className='text-[40px] text-white' />
                        <div className="info w-[70%] ">

                            <h3 className='text-white'>Total Products</h3>
                            <b className='text-white'> 1,390</b>

                        </div>
                        <IoStatsChart className='text-[40px] text-white' />
                    </div>
                </SwiperSlide>








            </Swiper>
        </>
    )
}


export default DashboardBoxes;

