import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import App from "./App";
import {mainRoutes} from "./routers";
import "./rem.js"
ReactDom.render(
(
    <Router>
        <Switch>
            {
                // 一级路由
                mainRoutes.map(route=>{
                    return <Route key={route.pathname} path={route.pathname} component={route.component}/>
                })
            }
            <Redirect to="/index" from="/" exact/>
        </Switch>
    </Router>
),document.getElementById("root"))