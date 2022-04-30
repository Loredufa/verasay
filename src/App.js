import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import {Home} from './components/Home';
import {Porfolio} from './components/Porfolio';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      {/* <Route path= "/" element={<LandingPage/>}/> */}
      <Route path= "/" element={<Home/>}/>
      <Route path= "/Porfolio" element={<Porfolio/>}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
//Client ID
//665304440149-s5sngsia1svjnu5atgc4542soi9ks6ec.apps.googleusercontent.com

//Client Secret
//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

//cliente de OAuth
//Client ID
//665304440149-h5dp1dld11qirujnnrg33rcc0kpadrq4.apps.googleusercontent.com
//Client Secret
//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

//API key
//AIzaSyDxz6aZaZsT8CXaipY9d0XPzTLiJ0DWYSk

// npm i axios
