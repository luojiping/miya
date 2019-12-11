import React ,{Component} from 'react'
import {Icon} from 'antd'
class LoginFooter extends Component{
    render(){
        return(
                <footer className = 'loginPublic'>
                    <figure className = 'footerFig'>
                        <Icon type="home" className = 'footerNav' />
                        <figcaption>首页</figcaption>
                    </figure>
                    <figure className = 'footerFig'>
                        <Icon type="file-search" className = 'footerNav' />
                        <figcaption>分类</figcaption>
                    </figure>
                    <figure className = 'footerFig'>
                        <Icon type="shopping-cart" className = 'footerNav' />
                        <figcaption>购物车</figcaption>
                    </figure>
                    <figure className = 'footerFig'>
                        <Icon type="user" className = 'footerNav' />
                        <figcaption>我的</figcaption>
                    </figure>
                </footer>
        )
    }
}
export default LoginFooter