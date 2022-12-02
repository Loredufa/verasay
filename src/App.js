import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home2} from './components/Home2';
import {Porfolio2} from './components/Porfolio2';
import { Landing } from './components/Landing';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path= "/" element={<Landing/>}/>
      <Route path= "/Porfolio" element={<Porfolio2/>}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

