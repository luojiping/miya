import React ,{Component}from "react";
import "../../../../assets/css/home/header.css"
import TabBar from "./tabbar"
class Header extends Component{
    render(){
        return (
            <>
                <div className="header">
                    <span>蜜芽拼团</span>
                    <i>包邮</i>
                </div>
                <TabBar/>
            </>
        )
    }
}
export default Header