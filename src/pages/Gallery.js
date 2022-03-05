import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import TopHeader from '../shared/TopHeader';
import about from '../assets/images/about.png';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import '../assets/css/gallery.css';

const Gallery = () => {

    const images = [
        slider1,
        about,
        about,
        slider2,
        slider2,
        slider1,
        slider1,
        about,
        slider2
    ];

    const videos = [
        'https://www.youtube.com/embed/e5Hc2B50Z7c',
        'https://www.youtube.com/embed/RRRdiqL2tf0',
        'https://www.youtube.com/embed/8cpM-NSxkZQ',
        'https://www.youtube.com/embed/cJZyzayWcS4',
        'https://www.youtube.com/embed/dtCaSuWztzg',
        'https://www.youtube.com/embed/JWgi6_QM2Ao'
    ];

    const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

    return (
        <React.Fragment>
            <TopHeader>GALLERY</TopHeader>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='main-heading my-4'>IMAGE GALLERY</h2>
                        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints} className='my-3'>
                            <Masonry gutter={'4'}>
                                {images.map((image, index) => (
                                    <img key={index} src={image} alt='Gallery images' loading='lazy' />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-12'>
                        <h2 className='main-heading my-4'>VIDEO GALLERY</h2>
                        <div className='row'>
                            {videos.map((video, index) => (
                                <div key={index} className='col-xs-12 col-md-6 col-lg-4'>
                                    <iframe title='Video' src={video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Gallery;
