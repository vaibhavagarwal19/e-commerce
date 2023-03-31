import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';


function Slider() {
    // const [slideIndex,setSlideIndex] = useState(0)
    // const handleClick = (direction) =>{
    //     if(direction==='left'){
    //         setSlideIndex(slideIndex > 0? slideIndex-1 :2)
    //     } else {
    //         setSlideIndex(slideIndex > 2? slideIndex +1 :0)
    //     }
    // }
  return (
    
      
    
<>
<Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                rewind={true}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide><img className="img-slide" src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." /></SwiperSlide>
                <SwiperSlide><img className="img-slide" src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." /></SwiperSlide>
                <SwiperSlide><img   src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 img-slide" alt="..." /></SwiperSlide>
             

            </Swiper>

<section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Categories of The Month</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="/"><img src="../img/category_img_01.jpg" className="rounded-circle img-fluid border"/></a>
                <h5 className="text-center mt-3 mb-3">Watches</h5>
                <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="../img/category_img_02.jpg" className="rounded-circle img-fluid border"/></a>
                <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="../img/category_img_03.jpg" className="rounded-circle img-fluid border"/></a>
                <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
        </div>
    </section>
    <section className="bg-light">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Featured Product</h1>
                    <p>
                        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                      <img src="../img/feature_prod_01.jpg" className="card-img-top"/>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$240.00</li>
                            </ul>
                            <a href="shop-single.html" className="h2 text-decoration-none text-dark">Gym Weight</a>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p className="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src="../img/feature_prod_02.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$480.00</li>
                            </ul>
                            <a href="shop-single.html" className="h2 text-decoration-none text-dark">Cloud Nike Shoes</a>
                            <p className="card-text">
                                Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                            </p>
                            <p className="text-muted">Reviews (48)</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src="../img/feature_prod_03.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$360.00</li>
                            </ul>
                            <a href="shop-single.html" className="h2 text-decoration-none text-dark">Summer Addides Shoes</a>
                            <p className="card-text">
                                Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            </p>
                            <p className="text-muted">Reviews (74)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1" style={{    fontWeight: 300}}>Our Services</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
        <div class="row">

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center"><i class="fa fa-truck fa-lg"></i></div>
                    <h2 class="h5 mt-4 text-center">Delivery Services</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center"><i class="fas fa-exchange-alt"></i></div>
                    <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center"><i class="fa fa-percent"></i></div>
                    <h2 class="h5 mt-4 text-center">Promotion</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center"><i class="fa fa-user"></i></div>
                    <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
                </div>
            </div>
        </div>
    </section>


      
              
           
    </>

  );
}

export default Slider;
