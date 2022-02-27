import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../assets/css/navbar.css';
import schoolLogo from '../assets/images/first-step-school-logo.png';

const NavbarComponent = () => {
    return (
        <div className='header mt-2'>
            <div className='container logo-container'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-4 text-lg-start text-sm-center logo'>
                        <img className='img-fluid school-logo' src={schoolLogo} alt='Logo' loading='lazy' />
                    </div>
                    <div className='col-xs-12 col-lg-8 text-start'>
                        <Navbar expand="lg">
                            <div className='container navbar-container'>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="mr-auto my-lg-0"
                                        style={{ textAlign: 'center' }}
                                    >
                                        <React.Fragment>
                                            <NavLink to='/' className='header-link' style={{ margin: '10px', textDecoration: 'none' }}>Home</NavLink>
                                            <NavLink to='/about' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>About</NavLink>
                                            <NavLink to='/about' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>Contact</NavLink>
                                            <NavLink to='/about' className='header-link ml-5' style={{ margin: '10px', textDecoration: 'none' }}>Syllabus</NavLink>
                                        </React.Fragment>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavbarComponent;
