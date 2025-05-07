import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default App;
