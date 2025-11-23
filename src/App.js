import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ProjectCards from './components/ProjectCard';
import Experience from './components/Experience';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div>
       <div>
      <NavBar />
      <Carousel />
      <div className="container my-5">
        <ProjectCards />
      </div>

      {/* Experience is full-bleed (background spans full viewport) */}
      <Experience />

      <div className="container my-5">
        <Services />
      </div>

      {/* Contact form full-bleed (background spans full viewport) */}
      <ContactForm />
    </div>
         
    </div>
  );
}

export default App;
