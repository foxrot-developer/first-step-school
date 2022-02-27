import React from 'react';

import TopSlider from '../components/TopSlider';
import Slider1 from '../assets/images/slider1.jpg';
import Slider2 from '../assets/images/slider2.jpg';
import '../assets/css/home.css';

const Home = () => {

    const headerContent = [
        { caption: 'Best school in the town', image: Slider1 },
        { caption: 'Best education system', image: Slider2 },
    ];
    return (
        <div className='container-fluid'>
            <div className='row slider-section'>
                <div className='col-12'>
                    <div className='row'>
                        <TopSlider headerData={headerContent} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
