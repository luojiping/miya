import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import App from "./App";
import {Provider} from 'react-redux'
import store from './store/index'

import {mainRoutes} from "./routers";
import "./rem.js"
import "./assets/css/global.css";
ReactDom.render(
(
    <Provider store = {store}>
        <Router>
        <Switch>
            {
                // 一级路由
                mainRoutes.map(route=>{
                    return <Route key={route.pathname} exact path={route.pathname} component={route.component}/>
                })
            }
            <Redirect to="/index" from="/" exact/>
        </Switch>
    </Router>
   </Provider>
),document.getElementById("root"))
