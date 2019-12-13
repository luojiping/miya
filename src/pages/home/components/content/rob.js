import React, { Component, useImperativeHandle } from 'react'
// 引入axios，请求数据
import axios from "axios"
import "../../../../assets/css/home/rob.css"
class Rob extends Component {
    state = {
        data: []
    }
    render() {
        return (
            <>
                <div className="todaylist">
                    <div className="todaylist_tit">今日必抢<span>·好团价</span></div>
                    <ul className="todaylist_content">
                        {
                            this.state.data[0]&&this.state.data[0].map((item) => {
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
                    <div className="list">
                        {
                            this.state.data[0]&&this.state.data[1].map((item) => {
                                return (
                                    <div className="lists" key={item.sku}>
                                        <img src={item.picture}></img>
                                        <div className="details">
                                            <div>
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
                </div>
            </>
        )
    }
    getList() {
        axios.get("/list")
            .then(res => {
                console.log(res)
                console.log(res.data.data_list)
                var arr = [];
                var arr2 = []
                var arr3 = []
                var arr4 = []
                var arr5 = []
                
                for( let i=0;i<res.data.data_list.length;i++){
                    if(i<3){
                        arr.push(res.data.data_list[i])    
                    }else if(i<7){
                        arr2.push(res.data.data_list[i]) 
                    }else if(i<12){
                        arr3.push(res.data.data_list[i])
                    }else if(i<17){
                        arr4.push(res.data.data_list[i])
                    }else{
                        arr5.push(res.data.data_list[i])
                    }
                }
                const arrAll = [arr,arr2,arr3,arr4,arr5] 
                this.setState({
                  data: arrAll
                })

                console.log(this.state.data)
                console.log(this.state.data[0])
            })
    }
    // 获取axios
    componentDidMount() {
        this.getList()
    }
}
export default Rob
