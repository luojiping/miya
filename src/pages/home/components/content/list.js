import React, { Component, useImperativeHandle } from 'react'
// 引入axios，请求数据
import axios from "axios"
import "../../../../assets/css/home/list.css"
class List extends Component {
    state = {
        data: []
    }
    render() {
        return (
            <>
                <div className="list">
                    {
                        this.props.list&&this.props.list.map((item) => {
                            return (
                                <div className="lists" key={item.sku}>
                                    <img src={item.picture}></img>
                                    <div className="details">
                                        <div className="det">
                                            <div className="title">{item.name}</div>
                                            <div className="describe">{item.intro}</div>
                                        </div>
                                        <div className="price">
                                            <div className="price_left">
                                                <p className="unit_price">单买价￥{item.sale_price}</p>
                                                <p className="sale">￥{item.groupon_price}</p>
                                                <p className="sprice">已拼{item.sale_count}件</p>
                                            </div>
                                            <div className="price_right">去拼团</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default List
