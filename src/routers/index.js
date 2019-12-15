import {
    Index,
    Classify,
    Login,
    Cart,
    ClassifyList,
    List,
    HomeList
} from "../pages";
import MyLogin from "../pages/login/myLogin";

export const mainRoutes = [{
    pathname : "/index",
    component : Index
},{
    pathname : "/classify",
    component : Classify
},{
    pathname : "/cart",
    component : Cart
},{
    pathname : "/my",
    component : Login
},{
    pathname:"/classify/classifyList/:id",
    component: ClassifyList
},{
    pathname:"/my/list",
    component:List
},{
    pathname:"/mylogin",
    component:MyLogin
}]

export const classifyRoutes= [
    {
        pathname:"/classify/classifyList/:id",
        component: ClassifyList
    }
]
export const secondRoutes = [{
    pathname:"/index/indexTab",
    component:HomeList
}]

