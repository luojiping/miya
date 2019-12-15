import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import {connect} from 'react-redux'
import {getUserInfo} from '../reducer'
import '../../../assets/css/login/list.css'
class MyLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
          if (!err) {
            this.props.getUserInfo(values)
            this.props.history.push("/index")
          }
        });
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
              <div className = 'mylogin'>
                  <div className = 'logImg'>
                    <div className='loginImg'>
                        <img src = 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1039440,2738766085&fm=26&gp=0.jpg' />
                    </div>
                  </div>
                  <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true }]
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true}],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary"  htmlType="submit" block className="login-form-button" >
                        立即登录
                    </Button> 
                    </Form.Item>
                </Form> 
              </div>
        )
    }
    
}
const MapStateToProps = (state) =>{
    return {
        myLogin : state.myLogin
    }
}
const MyLogins = Form.create({ name: 'normal_login' })(MyLogin);
export default connect(MapStateToProps,{getUserInfo})(MyLogins)