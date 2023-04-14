
import './App.css';
import Nav from './Component/nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Component/Footer';
import SignUp from './Component/Signup';
import Privatecmp from './Component/privatecomponent';
import Login from './Component/login';
import Addproduct from './Component/Addproduct';
import ProductList from './Component/Productlist';

import UpdateList from './Component/updatelist';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

         <Nav />
      
       <Routes>

 <Route element={<Privatecmp />} >
       
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<Addproduct />} />
        <Route path="/update/:id" element={<UpdateList />} />
        <Route path="/logout" element={<h1>logout</h1>} />
        <Route path="/Profile" element={<h1>Profile</h1>} />
        </Route>


        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />}   />
        
        
       </Routes>
       
       <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
