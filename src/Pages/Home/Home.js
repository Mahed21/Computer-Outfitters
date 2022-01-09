import React from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="mt-5">
            
            <div className='container mb-3'>
            <div className='row'>
                <div className='col col-lg-6 col-12 parent-banner-img'>
                    <img src="https://image.freepik.com/free-vector/banking-financial-isometric-composition-with-images-laptop-computer-icons-still-bank-wallet-money-vector-illustration_1284-30719.jpg" alt="" className='img-fluid image'/>
                    
                    <div className='banner-img'>
                    <img src="https://image.freepik.com/free-psd/sales-banner-template-with-image_23-2148149655.jpg" alt="" className='img-fluid '/>
                    </div>

                </div>
                <div className='col-lg-6'>
                    
                    <div className=''>
                    <h5 className='header-text'>
                        Welcome to ToolTik
                    </h5>
                    <p className='mt-5'>
                    lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged

                    </p>
                    <div className='row row-cols-lg-2 mt-5'>
                        <div className='col'>
                        <h5><i class="fas fa-star"></i> Warrantees & Gurantees</h5>
                        <h5><i class="fas fa-star"></i> Exceed Expectation</h5>

                        </div>
                        <div className='col'>
                        <h5><i class="fas fa-star"></i> Online Schedule</h5>
                        <h5><i class="fas fa-star"></i> Financing Available</h5>

                        </div>

                    </div>

                    </div>

                </div>

            </div>

            </div>

            <Services></Services>
            
        </div>
    );
};

export default Home;