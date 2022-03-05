import React from 'react';

import '../assets/css/top-header.css';

const TopHeader = (props) => {
    return (
        <div className='home-header-section'>
            <div>
                <h1 className='header-heading'>{props.children}</h1>
            </div>
        </div>
    )
}

export default TopHeader;
