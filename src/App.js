import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Routes, Route ,Link} from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
      
    
    </div>
  );
}

export default App;
