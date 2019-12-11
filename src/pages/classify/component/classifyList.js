import React, { Component } from 'react'
import "../../../assets/css/classify/classifyList.css";
class classifyList extends Component {
    render() {
        return (
            <div className="classifyList">
                <div className="searchBox">
                    <div className="search">
                        <img className="magnifier" src="https://img.miyabaobei.com/d1/p6/2019/05/09/6a/36/6a360af04ac4edbbf357c88a3b94e42e012161140.png"/>
                        <input className="searchTxt"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default classifyList;
