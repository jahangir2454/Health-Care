
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;



/* 
#00a3c8

#89be16

#acacac
#1e1e1e

background: linear-gradient(to bottom right, #E3F0FF, #FAFCFF);

box-shadow: 0px 25px 40px #1687d933;

     #c8c8c8
    #555555
    #77777


https://i.ibb.co/V32QnYF/doctors-5.jpg

*/