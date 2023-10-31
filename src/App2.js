
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
   return(
      <BrowserRouter>
      <Navbar>
          <Routes>
              <Route path='/home' exact element ={<Home></Home>}></Route>
              <Route path='/about' element ={<About></About>}></Route>
              <Route path='/services' element ={<Services></Services>}></Route>
              <Route path='/contact' element ={<Contact></Contact>}></Route>
          </Routes>
      </Navbar>
      
      </BrowserRouter>
      
   ) 

   
    
}

export default App;