import React, { Component, useImperativeHandle } from 'react'
// 引入axios，请求数据
import axios from "axios"
import All from "./all.js"
import List from "./list.js"
import Year from "./year.js"
import "../../../../assets/css/home/rob.css"
class Rob extends Component {
    state = {
        data: [],
        goods: {
            name:"年年有货",
            xiaoxi:"麻辣零食大礼包28.9元抢",
            background:1
        },
        goods2: {
            name:"家居百货",
            xiaoxi:"手帕纸30包9.9元抢",
            background:2
        }
    }
    render() {
        return (
            <>
                <div className="todaylist">
                    <div className="todaylist-top">
                        <div className="todaylist_tit">今日必抢<span>·好团价</span></div>
                        <ul className="todaylist_content">
                            {
                                this.state.data[0] && this.state.data[0].map((item) => {
                                    return (
                                        <li key={item.sku}>
                                            <img src={item.picture}></img>
                                            <div className="price">
                                                <span>￥{item.groupon_price}</span>
                                                <i>￥{item.market_price}</i>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <List list={this.state.data[1]} />
                    <All goods={this.state.goods} />
                    <Year year={this.state.data[2]} />
                    <List list={this.state.data[3]} />
                    <All goods={this.state.goods2} />
                    <Year year={this.state.data[4]} />
                    <List list={this.state.data[5]} />
                </div>
            </>
        )
    }
    getList() {
        axios.get("/list")
            .then(res => {
                // console.log(res)
                // console.log(res.data.data_list)
                var arr = [];
                var arr2 = []
                var arr3 = []
                var arr4 = []
                var arr5 = []
                var arr6 = []

                for (let i = 0; i < res.data.data_list.length; i++) {
                    if (i < 3) {
                        arr.push(res.data.data_list[i])
                    } else if (i < 7) {
                        arr2.push(res.data.data_list[i])
                    } else if (i < 11) {
                        arr3.push(res.data.data_list[i])
                    } else if (i < 15) {
                        arr4.push(res.data.data_list[i])
                    } else if (i < 20) {
                        arr5.push(res.data.data_list[i])
                    }
                    else {
                        arr6.push(res.data.data_list[i])
                    }
                }
                const arrAll = [arr, arr2, arr3, arr4, arr5, arr6]
                this.setState({
                    data: arrAll
                })

                console.log(this.state.data)
            })
    }
    // 获取axios
    componentDidMount() {
        this.getList()
    }
}
export default Rob
