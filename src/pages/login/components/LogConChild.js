import React ,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Avatar,Icon } from 'antd'
class LogConChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // data:['全部订单','待付款','待发货','待收货','待评价']
            data:[
                {'icon':'appstore','text':'全部订单'},
                {'icon':'save','text':'待付款'},
                {'icon':'bar-chart','text':'待发货'},
                {'icon':'gift','text':'待收货'},
                {'icon':'edit','text':'待评价'},
            ]
         };
    }
    // 方法
    handleClick = (i ) => {
        console.log(this.props) 
        this.props.history.push("/my/list")
    }
    render() {
        return (
            <section className = 'order'>
                {
                    this.state.data.map((item,index) =>{
                        return(
                            <figure key = {index} onClick = {this.handleClick.bind(this,index)}>
                                <Icon type={item.icon} className = 'icon' /> 
                                <figcaption>{item.text}</figcaption>
                            </figure> 
                        )
                    })
                }
            </section>
            
        );
    }
}

export default withRouter(LogConChild) ;