import React from 'react';

import TopSlider from '../components/TopSlider';
import Slider1 from '../assets/images/slider1.jpg';
import Slider2 from '../assets/images/slider2.jpg';
import '../assets/css/home.css';
import about from '../assets/images/about.png';
import Button from '../shared/Button';

const Home = () => {

    const headerContent = [
        { caption: 'Best school in the town', image: Slider1 },
        { caption: 'Best education system', image: Slider2 },
    ];
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row slider-section'>
                    <div className='col-12'>
                        <div className='row'>
                            <TopSlider headerData={headerContent} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-3'>
                <div className='row mt-5'>
                    <div className='col-xs-12 col-md-6 text-xs-center text-md-start'>
                        <img src={about} alt="About" className='img-fluid rounded section-image' />
                    </div>
                    <div className='col-xs-12 col-md-6 text-xs-center text-md-start pt-3'>
                        <h2 className='main-heading'>ABOUT</h2>
                        <p className='heading-content'>This is the content for about school</p>
                        <Button>MORE ABOUT US</Button>
                    </div>
                </div>
            </div>
            <div className='grey-section py-3'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-xs-12 col-md-6 text-xs-center text-md-start py-3'>
                            <h2 className='main-heading'>SYLLABUS</h2>
                            <p className='heading-content'>This is the content for school syllabus</p>
                            <Button>SYLLABUS DETAILS</Button>
                        </div>
                        <div className='col-xs-12 col-md-6 text-xs-center text-md-start'>
                            <img src={about} alt="About" className='img-fluid rounded section-image' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-3'>
                <div className='row mt-5'>
                    <div className='col-xs-12 col-md-6 text-xs-center text-md-start'>
                        <img src={about} alt="About" className='img-fluid rounded section-image' />
                    </div>
                    <div className='col-xs-12 col-md-6 text-xs-center text-md-start pt-3'>
                        <h2 className='main-heading'>PROGRAMS</h2>
                        <p className='heading-content'>This is the content for school programs</p>
                        <Button>OUR PROGRAMS</Button>
                    </div>
                </div>
            </div>
            <div className='grey-section py-3'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-xs-12 col-md-6 text-xs-center text-md-start py-3'>
                            <h2 className='main-heading'>OTHER ACTIVITIES</h2>
                            <p className='heading-content'>This is the content for school syllabus</p>
                            <Button>SPORTS</Button>
                            <p className='heading-content'>This is the content for school syllabus</p>
                            <Button>ART & CRAFT</Button>
                        </div>
                        <div className='col-xs-12 col-md-6 text-xs-center text-md-start'>
                            <img src={about} alt="About" className='img-fluid rounded section-image' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
