import React, { Component } from "react";
import "../../../../assets/css/home/footer.css"
class Header extends Component {
    render() {
        return (
            <ul className="footer">
                <li className="checked">
                    <i className="iconfont icon-yemian"></i>
                    首页
                </li>
                <li>
                    <i className="iconfont icon-icon"></i>
                    <span>分类</span>
                </li>
                <li>
                    <i className="iconfont icon-che"></i>
                    <span>购物车</span>
                </li>
                <li>
                    <i className="iconfont icon-meActive"></i>
                    <span>我的</span>
                </li>
            </ul>
        )
    }
}
export default Header