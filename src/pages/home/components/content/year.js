import React, { Component } from 'react'
import "../../../../assets/css/home/year.css"
class Year extends Component {
    render() {
        return (
            <div className="year">
                <ul className="yearList">
                    {
                        this.props.year && this.props.year.map(item => {
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
                    <li className="more">
                        <p className="look">查看更多</p>
                        <p className="mores">MORE</p>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Year