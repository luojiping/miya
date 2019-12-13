import React, { Component } from 'react'
import Banner from "./banner.js";
import Rob from "./rob.js";
import Scroll from "./scroll.js"
import "../../../../assets/css/home/scroll.css"
class Conent extends Component {
    render() {
        return (
           <>
                <Banner style={{width:"100%;height:1.8rem"}}/>
                <Scroll/>
                <Rob />
           </>
        )
    }
}
export default Conent