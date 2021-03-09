import React from "react";
import "./App.css"
import Cart from "./components/Cart";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'



 const App = () => {
  return (
    <div className="App"> 
    <Router>
    <div > 
     <Navbar />
     <Switch>
       <Route path='/' exact component={Product}></Route>
       <Route path='/cart' exact component={Cart}></Route>
     </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;