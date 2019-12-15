import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Icon  } from 'antd'

class LoginHeader extends Component{
    constructor(props) {
        super(props);
    }
    handelClick = () =>{
        this.props.history.push('/index')
    }
    handelClick1 = () =>{
        this.props.history.go(-1)
    }
    render(){
        return(
            <header className = 'loginPublic'>
                <Icon type="left" className = ' headerLL' onClick = {this.handelClick1} />
                <p className ='headerC'>个人中心</p>
                <Icon type="home" className = ' headerLL ' onClick = {this.handelClick} />
            </header>
        )
    }
}
export default withRouter(LoginHeader)