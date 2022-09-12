import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App ">
      <div className="container mx-auto">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}

export default App;
