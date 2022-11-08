import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <div className='freespace' ></div>
      <div className="blur1" ></div>
      <div className="blur2" ></div>
      
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
