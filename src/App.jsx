import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <Projects></Projects>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
};

export default App;