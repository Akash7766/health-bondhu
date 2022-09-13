import "./App.css";
import Banner from "./Components/Banner/Banner";
import Experience from "./Components/Experience/Experience";
import Feature from "./Components/Feature/Feature";
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
      </div>
    </div>
  );
}

export default App;
