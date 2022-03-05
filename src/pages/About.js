import React from 'react';

import TopHeader from '../shared/TopHeader';
import about from '../assets/images/about.png';

const About = () => {
    return (
        <React.Fragment>
            <TopHeader>ABOUT US</TopHeader>
            <div className='container py-3'>
                <div className='row mt-5'>
                    <div className='col-xs-12 col-md-6 text-xs-center text-md-start'>
                        <img src={about} alt="About" className='img-fluid rounded section-image' />
                    </div>
                    <div className='col-xs-12 col-md-6 text-xs-center text-md-start pt-3'>
                        <h2 className='main-heading'>MESSAGE FROM PRINCIPAL</h2>
                        <p className='heading-content'>This is the message from school principal</p>
                    </div>
                </div>
            </div>
            <div className='grey-section py-3'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-xs-12 col-md-6 text-xs-center text-md-start py-3'>
                            <h2 className='main-heading'>RULES & REGULATIONS</h2>
                            <p className='heading-content'>These are rules and regulations</p>
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
                        <h2 className='main-heading'>SCHOOL FUNCTIONS</h2>
                        <p className='heading-content'>This is the section for school functions</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;
