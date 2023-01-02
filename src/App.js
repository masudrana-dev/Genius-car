import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About'
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import RequiredAuth from './Pages/RequiresAuth/RequiredAuth';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
