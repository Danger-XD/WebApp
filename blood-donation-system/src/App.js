import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navbar/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Addservice from './Components/Addservice/Addservice';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Addservice2 from './Components/Addservice2/Addservice2';
import Services from './Components/Services/Services';
import Services2 from './Components/Services2/Services2';
import UpdateService from './Components/UpdateService/UpdateService';
import UpdateService2 from './Components/UpdateService2/UpdateService2';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
    <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
    <Route path="/services" element={<Services/>} />
      </Routes>
      <Routes>
      <Route path="/services2" element={<Services2/>} />
      </Routes>
      <Routes>
      <Route path="/updateService/:serviceId" element={<UpdateService/>}/>
      </Routes>
      <Routes>
      <Route path="/updateService2/:serviceId" element={<UpdateService2/>}/>
      </Routes>
      <Routes>
    <Route path="/addservice" element={<Addservice />} />
      </Routes>
      <Routes>
    <Route path="/addservice2" element={<Addservice2 />} />
      </Routes>
      <Routes>
    <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
    <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
