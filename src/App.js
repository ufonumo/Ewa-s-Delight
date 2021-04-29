import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import {BrowserRouter , Route} from "react-router-dom";
import Contact from './pages/Contact';
import Products from './pages/Products';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header/>
        <Route exact path='/' component={HeroSection} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Products' component={Products} />

      </div>
    </BrowserRouter>

  );
}

export default App;
