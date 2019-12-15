import React, { Component } from 'react'
import {Link,withRouter} from "react-router-dom";

class All extends Component {
    jumpList(e){
        // console.log(this.props)
        this.props.history.push("/index/indexTab")
    }
    render() {
        return (
            <>
                <div history={this.props.history} className="yearTitle" onClick={this.jumpList.bind(this)} style={{background:this.props.goods.background === 1 ? "#FDD6DB" : "#edf9ff"}}>
                    <span className="goods">{this.props.goods.name}</span>
                    <span className="libao">{this.props.goods.xiaoxi}</span>
                    <span className="whole">全部商品 ></span>
                </div>
            </>
        )
    }
}
export default withRouter(All)
