import "./App.css";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Who from "./components/Who";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
