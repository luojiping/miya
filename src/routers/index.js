import {Index,Classify,Login,List} from "../pages";

export const mainRoutes = [{
    pathname : "/index",
    component : Index
},{
    pathname : "/classify",
    component : Classify
},{
    pathname : "/my",
    component : Login
}]

// 二级路由
export const SecondRoutes = [{
        pathname : "/my/list/:i",
        component : List
}]






