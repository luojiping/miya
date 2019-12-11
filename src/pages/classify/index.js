import React, { Component } from 'react';
import BScroll from 'better-scroll';
import axios from 'axios';
import '../../assets/css/global.css';
import '../../assets/css/classify/index.css';
import SlideBar from "./component/navBar";
import Search from "./component/search";

class Classify extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="classify">   
                <Search />
                <div className="product" >
                    <SlideBar/>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api')
        .then(res=>{
            console.log(res);
        })
    }
}

export default Classify;
