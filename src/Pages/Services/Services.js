import { Carousel } from 'bootstrap';
import React from 'react';
import Feature from '../Feature/Feature';
import './Services.css'

const Services = () => {
    return (
        <div className='mt-5 mb-4'>
            <div className='container mb-3'>
                <h5 className='text-center header-text'>What we can offer for you</h5>
                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            
            <div className='row'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-6'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://dlcdnrog.asus.com/rog/media/1622470414596.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://dlcdnrog.asus.com/rog/media/1546852825174.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://www.tech-wd.com/wd/wp-content/uploads/2020/08/ROG-Zephyrus-Duo-15-GX550.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

            </div>
            <div className='col-lg-3'>

            </div>
                
            </div>

            {/* feature */}
            <div className='mt-5 feature'>
            <div className='feat-text text-center pt-5'>
                <h3 className='text-center'>
                Featured Category
                </h3>
                <h5>Get Your Desired Product from Featured Category!</h5>

            </div>
           </div>
           {/* feature end */}

            
        </div>
    );
};

export default Services;