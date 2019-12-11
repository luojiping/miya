import React, { Component } from 'react'
import { Icon  } from 'antd'

class LoginHeader extends Component{
    render(){
        return(
            <header className = 'loginPublic'>
                <Icon type="left" className = 'headerPublic headerLL'/>
                <p className = 'headerPublic headerC'>个人中心</p>
                <Icon type="home" className = 'headerPublic headerRR' />
            </header>
        )
    }
}
export default LoginHeader