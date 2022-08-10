import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Routes, Route ,Link} from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddItem from './components/AddItem/AddItem';
import DeleteItem from './components/DeleteItem/DeleteItem';
import FoodDetails from './components/FoodDetails/FoodDetails';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="addProduct" element={<RequireAuth><AddItem /></RequireAuth>} />
        <Route path="deleteItem" element={<RequireAuth><DeleteItem /></RequireAuth>} />
        <Route path='/foodDetails/:foodDetailsId' element={<FoodDetails></FoodDetails>}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<Register />} />
      </Routes>
      <Footer></Footer>
      
    
    </div>
  );
}

export default App;
