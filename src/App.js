import React,{Component} from "react";
import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom";
// 引入路由，配置二级路由
import {secondRoutes} from "./routers";
class App extends Component{
    render(){
        return(
            <>
                {
                    // 把Switch这个当前组件当做属性的形式传递    配置二级路由
                    <Switch>
                        {
                            secondRoutes.map(route=>{
                                return <Route key={route.pathname} path={route.pathname} render={(routerProps)=><route.component {...routerProps}/>}/>
                            })
                        }
                    </Switch>
                }
            </>
        )
    }
}
export default App;