import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Syllabus from '../pages/Syllabus';
import Programs from '../pages/Programs';
import Gallery from '../pages/Gallery';

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/syllabus' element={<Syllabus />}></Route>
            <Route exact path='/programs' element={<Programs />}></Route>
            <Route exact path='/gallery' element={<Gallery />}></Route>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default NavigationRoutes;
