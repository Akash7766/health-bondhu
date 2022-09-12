import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App ">
      <div className="container mx-auto">
        <Navbar />
        <Banner />
        <Services />
      </div>
    </div>
  );
}

export default App;
