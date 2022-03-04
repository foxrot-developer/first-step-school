import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, YouTube } from '@mui/icons-material';

import schoolLogo from '../assets/images/first-step-school-logo.png';
import '../assets/css/footer.css';

const Footer = () => {

    return (
        <div className='container-fluid footer-section py-5'>
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <img className='img-fluid school-logo-footer' src={schoolLogo} alt='Logo' loading='lazy' />
                    <h3 className='footer-logo-heading'>My First Step School</h3>
                    <h4 className='footer-logo-subheading'>The school of your choice</h4>
                </div>
                <div className='col-xs-12 col-md-4 pt-3'>
                    <h4 className='footer-link-heading'>Important Links</h4>
                    <div className='imp-links'>
                        <NavLink to='/'>About</NavLink>
                        <NavLink to='/'>Syllabus</NavLink>
                        <NavLink to='/'>Activities</NavLink>
                        <NavLink to='/'>Contact</NavLink>
                        <NavLink to='/'>Programs</NavLink>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4 pt-3'>
                    <h4 className='footer-link-heading'>Social Profiles</h4>
                    <div className='social-links'>
                        <Facebook />
                        <Twitter />
                        <YouTube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
