import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';



function App() {


  return (

    <>

      <BrowserRouter>


        <Header></Header>

        
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />

        </Routes>



        <Footer></Footer>

      </BrowserRouter>
    </>

  )
}

export default App
