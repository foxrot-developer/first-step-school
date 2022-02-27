import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavbarComponent from './shared/NavbarComponent';
import NavigationRoutes from './routes/NavigationRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <NavigationRoutes />
      </Router>
    </div>
  );
}

export default App;
