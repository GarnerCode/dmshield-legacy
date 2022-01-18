import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*App Components*/
import Navbar from './Components/Navbar';
import Campaign from './Components/Campaign';
import Characters from './Components/Characters';
import Encounters from './Components/Encounters';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Campaign />} />
          <Route exact path='/characters' element={<Characters />} />
          <Route exact path='/encounters' element={<Encounters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
