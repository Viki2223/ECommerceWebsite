import React from "react";
import {Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import BannerBox from "../BannerBox";

import { Navigation } from "swiper/modules";

const AdsBannerSlider = (props) => {
    return (
       <div className="py-5 w-full">
       <Swiper 
       slidesPerView={props.items}
       spaceBetween={10}
       navigation={true}
       modules={[Navigation]}
        className="smlBtn"
       >

       <SwiperSlide>
        <BannerBox img={'/banner1.jpg'} link={'/'}/>
       </SwiperSlide>

       <SwiperSlide>
        <BannerBox img={'/banner2.jpg'} link={'/'}/>
       </SwiperSlide>

       <SwiperSlide>
        <BannerBox img={'/banner3.jpg'} link={'/'}/>
       </SwiperSlide>

       <SwiperSlide>
        <BannerBox img={'/banner4.jpg'} link={'/'}/>
       </SwiperSlide>

       <SwiperSlide>
        <BannerBox img={'/banner5.jpg'} link={'/'}/>
       </SwiperSlide>

       <SwiperSlide>
        <BannerBox img={'/banner6.jpg'} link={'/'}/>
       </SwiperSlide>

       <SwiperSlide>
        <BannerBox img={'/banner7.png'} link={'/'}/>
       </SwiperSlide>

       <SwiperSlide>
        <BannerBox img={'/banner8.png'} link={'/'}/>
       </SwiperSlide>

       </Swiper>
       </div>
    )
}

export default AdsBannerSlider;