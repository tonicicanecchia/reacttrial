import logo from './logo.svg';
import './App.css';
import Homepage from "./homepage";
import About from "./aboutpage";
import Products from "./products";
import {BrowserRouter as  Router ,Switch ,Route } from "react-router-dom";
import    Dompage from "./dompage";
  import Datafetch from "./datafetch";

    export default function  App ( ) {  



      return (<div>
        <Switch>
<Route path = "/about" component ={About} />
<Route path = "/products" component ={Products} />
<Route path = "/dompage" component ={Dompage} />
<Route path = "/datafetch" component ={Datafetch} />
<Route path = "/homepage" component ={Homepage} />
</Switch>
</div>
);
      }


        
        
            