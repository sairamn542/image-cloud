import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Data from './Component/Data'; // Adjust the path if necessary
import ShowData from './Component/ShowData'; // Adjust the path if necessary


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Data />} />
        <Route path='/otherpage' element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
