import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import App from "./App";
import {mainRoutes} from "./routers";
import "./rem.js"
import "./assets/css/global.css";
ReactDom.render(
(
    <Router>
        <Switch>
            <Route path="/index/indexTab" render={()=><App/>}/>
            {
                // 一级路由
                mainRoutes.map(route=>{
                    return <Route key={route.pathname} exact path={route.pathname} component={route.component}/>
                })
            }
            <Redirect to="/index" from="/" exact/>
        </Switch>
    </Router>
),document.getElementById("root"))
