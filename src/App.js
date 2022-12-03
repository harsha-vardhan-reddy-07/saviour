import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './styles/App.css';

function App() {

  return (
    <>
    <AuthContextProvider>
      <BrowserRouter>
      <div className="App">
        <div className='freespace' ></div>
        <div className="blur1" ></div>
        <div className="blur2" ></div>
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
      </div>
      </BrowserRouter>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
