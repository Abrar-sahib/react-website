import './App.css';
import { NavBar, Hero, Services, Clints, Blog, ContactUs, Footer} from "./components"
function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Services />
      <Clints />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
