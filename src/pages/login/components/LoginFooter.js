import React ,{Component} from 'react'
import {Icon} from 'antd'
class LoginFooter extends Component{
    render(){
        return(
                <footer className = 'loginPublic'>
                    <figure className = 'footerFig'>
                        <Icon type="home" className = 'footerIcon' />
                        <figcaption>首页</figcaption>
                    </figure>
                    <figure className = 'footerFig'>
                        <Icon type="file-search" className = 'footerIcon' />
                        <figcaption>分类</figcaption>
                    </figure>
                    <figure className = 'footerFig'>
                        <Icon type="shopping-cart" className = 'footerIcon' />
                        <figcaption>购物车</figcaption>
                    </figure>
                    <figure className = 'footerFig'>
                        <Icon type="user" className = 'footerIcon' />
                        <figcaption>我的</figcaption>
                    </figure>
                </footer>
        )
    }
}
export default LoginFooter