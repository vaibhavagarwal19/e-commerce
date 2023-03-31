import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";
import './categories.css'
import Footer from './Footer';
import Navbar from './Navbar';



function Categories() {
  
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setData(data))
    }, []);

//   console.log(data)

  return (
    <>
    <Navbar/>
    <div className="categories-header">
      <h1>Categories</h1>
      
    </div>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
             {data.map((item)=>(
            <div key={item.id}>
                 <SwiperSlide >
                    <div className='swiper-cat-main' style={{background:`url(https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
                    
                    </div>
                    <h3 className='item' >{item}</h3>
                
                   
                    </SwiperSlide>
                
       
        
            </div>



        )
     )}
     
    </Swiper>
    <Footer/>
    </>
    
  )
}

export default Categories