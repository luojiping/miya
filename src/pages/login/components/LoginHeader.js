import React, { Component } from 'react'
import { Icon  } from 'antd'

class LoginHeader extends Component{
    render(){
        return(
            <header className = 'loginPublic'>
                <Icon type="left" className = ' headerLL'/>
                <p className = ' headerC'>个人中心</p>
                <Icon type="home" className = ' headerLL ' />
            </header>
        )
    }
}
export default LoginHeader