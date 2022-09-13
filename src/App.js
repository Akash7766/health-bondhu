import "./App.css";
import Banner from "./Components/Banner/Banner";
import Experience from "./Components/Experience/Experience";
import FAQ from "./Components/FAQ/FAQ";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App ">
      <div className="container mx-auto">
        <Navbar />
        <Banner />
        <Services />
        <Experience />
        <Feature />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
