import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/body/Introduction";
import SectionOne from "./components/body/innerbody/SectionOne";
import Footer from "./components/body/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Introduction />
      <SectionOne/>
      <Footer/>
    </div>
  );
}

export default App;
