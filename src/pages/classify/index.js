import React, { Component } from 'react';
import '@/assets/css/global.css';
import '@/assets/css/classify/index.css';
import SlideBar from "./component/classifyPage/navBar";
import Search from "./component/classifyList/search";
import Footer from  "@/component/footer/footer";

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
                <Footer />
            </div>
        )
    }
}

export default Classify;
