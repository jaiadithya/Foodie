import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Work from "./Components/work";
import Testimonial from "./Components/testimonial";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;