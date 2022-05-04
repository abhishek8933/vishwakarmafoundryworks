import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/contact';
import Footer from './components/Footer/Footer';
import Register from './components/Register';
import Advertise from './components/Advertise';
import {Route, Switch} from 'react-router';
import {Toaster} from "react-hot-toast";


function App() {
  return (
    <div>
    <div>
      <Toaster position='top-right'
      toastOptions={{
          success:{
            theme:{
              primary:
                '#4aed88'
            },
          }}}
      ></Toaster>
    </div>
      <Navbar/>
      <Switch> 
        <Route exact path="/" component={Home}/> 
        <Route exact path="/about" component={About}/> 
        <Route exact path="/advertise" component={Advertise}/>
        <Route exact path="/service" component={Services}/> 
        <Route exact path="/contact" component={Contact}/> 
        <Route exact path="/register" component={Register} /> 
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
