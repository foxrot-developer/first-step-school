import React from 'react';
import { ArrowForward } from '@mui/icons-material';

import '../assets/css/button.css';

const Button = (props) => {
    return (
        <button className='btn button-global'>{props.children} <ArrowForward className='button-icon' /></button>
    )
}

export default Button;
