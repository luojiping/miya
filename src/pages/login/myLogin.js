import React, { Component } from 'react'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd'
import '../../assets/css/login/list.css'
import Header from 'rmc-calendar/lib/calendar/Header'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
class MyLogin extends Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        )
        return (
            <div className='login' >
                <div className='mylogin'>
                    <img src='https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1039440,2738766085&fm=26&gp=0.jpg' />
                </div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        }
                        )(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>

                    <Form.Item extra="We must make sure that your are a human.">
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                })(<Input />)}
                            </Col>
                            <Col span={12}>
                                <Button>发送验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>


                </Form>
            </div>
        )
    }
}
const MyLogins = Form.create({ name: 'register' })(MyLogin);
export default MyLogins