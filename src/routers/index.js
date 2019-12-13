import {
    Index,
    Classify,
    Login,
    Cart,
    ClassifyList
} from "../pages";

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
    pathname : "/cart",
    component : Login 
},{
    pathname:"/classify/classifyList",
    component: ClassifyList
}]

// 二级路由
export const SecondRoutes = [{
        pathname : "/my/list/:i",
        component : List
}]





export const classifyRoutes= [
    {
        pathname:"/classify/classifyList",
        component: ClassifyList
    }
]

