import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../assets/css/home/footer.css"
class Header extends Component {
    render() {
        return (
            <ul className="footer">
                <li className="checked">
                    <Link to="/index" className="link">
                        <i className="iconfont icon-yemian"></i>
                        <span>首页</span>
                    </Link>

                </li>
                <li>
                    <Link to="/classify" className="link">
                        <i className="iconfont icon-icon"></i>
                        <span>分类</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="link">
                        <i className="iconfont icon-che"></i>
                        <span>购物车</span>
                    </Link>
                </li>
                <li>
                    <Link to="/my" className="link">
                        <i className="iconfont icon-meActive"></i>
                        <span>我的</span>
                    </Link>
                </li>
            </ul>
        )
    }
}
export default Header