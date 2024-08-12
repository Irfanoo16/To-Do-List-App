import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
