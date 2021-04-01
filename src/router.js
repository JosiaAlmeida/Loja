import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import index from "./pages/index.jsx"
import login from "./pages/Login/Login.jsx"
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={index}/>
                <Route  path="/Login" component={login}/>
            </Switch>
        </BrowserRouter>
    )
}