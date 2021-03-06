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
    pathname:"/classify/classifyList",
    component: ClassifyList
}]

export const classifyRoutes= [
    {
        pathname:"/classify/classifyList",
        component: ClassifyList
    }
]

