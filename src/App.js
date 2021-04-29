import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import {BrowserRouter , Route} from "react-router-dom";
import Contact from './pages/Contact';
import Products from './pages/Products';
import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <BrowserRouter>
        <div className="App">
          {
            loading ?
              <Loader
              type="Watch"
              color="#ff6900"
              height={100}
              width={100}
              marginTop='100px'
              className='ewa_loader'
            />
          :
            <>
              <Header/>
              <Route exact path='/' component={HeroSection} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Products' component={Products} />
            </>
          }
        </div>
      
    </BrowserRouter>

  );
}

export default App;
