import React, { Component } from 'react'
import "../../../../assets/css/home/rob.css"
class Rob extends Component {
    render() {
        return (
            <>
                <div className="todaylist">
                    <div className="todaylist_tit">今日必抢<span>·好团价</span></div>
                    <ul className="todaylist_content">
                        <li>
                            <img src="https://img09.miyabaobei.com/d1/p5/2018/07/02/fa/6b/fa6bb552fe5b44f785b72530cdd83eac150939419.jpg"></img>
                            <div className="price">
                                <span>￥42</span>
                                <i>￥59</i>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Rob
