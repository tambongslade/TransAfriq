import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VehicleDetail from './pages/VehicleDetail';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicule/:id" element={<VehicleDetail />} />
        <Route path="/comment-ca-marche" element={<HowItWorks />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
