import React ,{Component} from 'react'
import { Icon } from 'antd'
class LogConCoup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {'icon':'instagram','text':'优惠券', 'icon1':'right','text1':'24张未使用', 'status':0,'borderstatus':0},
                {'icon':'mobile','text':'红包', 'icon1':'right','text1':'0张未使用', 'borderstatus':0},
                {'icon':'contacts','text':'实名认证', 'icon1':'right','text1':'未认证' , 'status':2,'borderstatus':0},
                {'icon':'mobile','text':'联系客服', 'icon1':'right','text1':'10108088', 'colorStatus':0 },
                {'icon':'mobile','text':'账户绑定手机号码 ', 'icon1':'right','text1':'13993833534','colorStatus':0 }
            ]
         };
    }
  
    render() {
        return (
            <section className = 'coupons'>
                {
                    this.state.data.map((item ,index) =>{
                        return(
                            <div className  = 'coup'
                                style = {item.borderstatus === 0?{borderBottom:' .02rem solid #efefef'}:{borderBottom:'0'}}
                                key =  {index}>
                                <span className = 'span1' >
                                    <Icon type={item.icon} theme="filled" 
                                    style={item.status===0?{color:"#FFCC00"}:item.status===2?{color:"#6699FF"}:{color:"#ff4e88"}}
                                    className = 'icons' /> 
                                    {item.text}
                                </span>
                                <span className = 'span1 span2'>
                                    {item.text1} 
                                    <Icon style = {{paddingLeft:'.18rem'}} type={item.icon1} />
                                </span>
                            </div>
                        )
                    })
                }
            </section>  
        );
    }
}

export default LogConCoup