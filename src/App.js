import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavbarComponent from './shared/NavbarComponent';
import NavigationRoutes from './routes/NavigationRoutes';
import Footer from './shared/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <NavigationRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
