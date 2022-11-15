import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home2} from './components/Home2';
import {Porfolio2} from './components/Porfolio2';
import { Loading } from './components/Loading';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path= "/" element={<Home2/>}/>
      <Route path= "/Porfolio" element={<Porfolio2/>}/>
      <Route path= "/Loading" element={<Loading/>}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

