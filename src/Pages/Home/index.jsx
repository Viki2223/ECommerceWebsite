import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';

import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';

 const Home = () => {
  
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <HomeSlider/>
    <HomeCatSlider/>

      <section className="bg-white py-8">
          <div className="container">
            <div className="flex items-center justify-between">
               <div className="leftSec">
                <h2 className="text-[20px] font-[600]">Popular Products</h2>
                <p className="text-[14px] font-[400]">Do not miss the current offers until the
                  end of March.</p>
              </div>
        <div className="rightSec w-[60%]">         
         <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example">
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
        <Tab label="Jewellery"/>
        </Tabs>  
            </div>
            </div>

          <ProductsSlider items={6}/>

            </div>
      </section>


      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping py-4 pt-2 border 2 border-[#ff5252]
           flex items-center justify-between rounded-md mb-7 w-[80%] m-auto">
          <div className="col1 flex items-center gap-4">
          <LiaShippingFastSolid className="text-[50px]"/>
          <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
          </div>
          <div className="col2">
            <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
          </div>

            <p className="font-bold text-[25px]"> - Only $200* </p>
          </div>
        <AdsBannerSlider items={7}/>
        </div>
      </section>

        <section className="py-5 pt-0 bg-white">
          <div className="container"> 
            <h2 className="text-[20px] font-[600]">Latest Products</h2>
            <ProductsSlider items={6} />
            <img src="bannerSml.png" 
    className="transition-transform duration-700 ease-in-out delay-200 hover:scale-105 cursor-pointer"/>

          </div>
        </section>

         <section className="py-5 pt-0 bg-white">
          <div className="container"> 
            <h2 className="text-[20px] font-[600]">Featured Products</h2>
            <ProductsSlider items={6} />

            <AdsBannerSlider items={6}/>
          </div>
        </section>

        <section className="py-5 pt-0 pb-8 bg-white blogSection ">
          <div className="container">
            <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation ={true}
            modules={[Navigation]}
            className="blogSlider">
              <SwiperSlide>
              <BlogItem/>
              </SwiperSlide>
              
                <SwiperSlide>
                  <BlogItem/>
              </SwiperSlide>

                <SwiperSlide>
              <BlogItem/>
              </SwiperSlide>
              
                <SwiperSlide>
              <BlogItem/>
              </SwiperSlide>


                <SwiperSlide>
              <BlogItem/>
              </SwiperSlide>
              </Swiper>

          </div>
        </section>
        <Footer/>
    
  </>
  );
}

export default Home;