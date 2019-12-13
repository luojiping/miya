<<<<<<< HEAD
import {Index,Classify,Login,Cart} from "../pages";
=======
import {
    Index,
    Classify,
    Login,
    ClassifyList
} from "../pages";
>>>>>>> master
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

export const classifyRoutes= [
    {
        pathname:"/classify/classifyList",
        component: ClassifyList
    }
]

