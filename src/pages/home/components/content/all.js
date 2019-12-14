
import React, { Component } from 'react'

class All extends Component {
    render() {
        return (
            <>
                <div className="yearTitle" style={{background:this.props.goods.background === 1 ? "#FDD6DB" : "#edf9ff"}}>
                    <span className="goods">{this.props.goods.name}</span>
                    <span className="libao">{this.props.goods.xiaoxi}</span>
                    <span className="whole">全部商品 ></span>
                </div>
            </>
        )
    }
}
export default All
