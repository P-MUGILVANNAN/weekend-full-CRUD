import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from './pages/ViewEmployee';
import Navbar from './components/Navbar';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/viewEmployee' element={<ViewEmployee />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
