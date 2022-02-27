import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default NavigationRoutes;
