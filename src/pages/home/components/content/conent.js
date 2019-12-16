import React, { Component } from 'react'
import Banner from "./banner.js";
import Rob from "./rob.js";
import Scroll from "./scroll.js"
import "../../../../assets/css/home/scroll.css"
class Conent extends Component {
    render() {
        return (
           <>
                <Banner/>
                <Scroll/>
                <Rob />
           </>
        )
    }
}
export default Conent