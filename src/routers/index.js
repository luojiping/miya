import {
    Index,
    Classify,
    Login,
    ClassifyList
} from "../pages";
export const mainRoutes = [{
    pathname : "/index",
    component : Index
},{
    pathname : "/classify",
    component : Classify
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

export const classifyRoutes= [
    {
        pathname:"/classify/classifyList",
        component: ClassifyList
    }
]

