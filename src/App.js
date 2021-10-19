
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Shared/Footer/Footer';
import SigIn from './components/SignIn/SigIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import ServicesDatelis from './components/Home/Services/ServicesDatelis/ServicesDatelis';
import Appoinment from './components/Home/Doctor/Appoinment/Appoinment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFount/NotFound';


function App() {
  return (
    <div className="">
      <AuthProvider>
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
          <PrivateRoute path="/doctors/:docId">
            <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/doctors">
              <Appoinment></Appoinment>
            </Route>
            <Route path="/appointment">
              <Appoinment></Appoinment>
            </Route>
          <Route path="/signIn">
            <SigIn></SigIn>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/serv/:id">
              <ServicesDatelis></ServicesDatelis>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
