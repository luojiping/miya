import React,{Component} from 'react'
import { Avatar, Modal, Button } from 'antd'
import LogConChild from './LogConChild'
import LogConCoup from './LogConCoup'
const { confirm } = Modal;
class LoginContent extends Component{

    logOut = () =>{
           alert(
               '确定退出登录？',
            Modal.confirm({
                title: 'm.mia.com显示',
                content: '确定退出登录？',
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                getContainer:false
              //   onOk() {
              //     console.log('OK');
              //   },
              //   onCancel() {
              //     console.log('Cancel');
              //   },
              })
           )
    }
    render(){
        return(
                <main className = 'mainCon'> 
                        {/* 个人名称部分 userInfo */}
                    <section className = 'userInfo'>
                        <div className = 'phoneuser'>
                            <Avatar size={64} icon="user" />
                        </div>
                        <div className = 'text'>
                            <h3>13993833534</h3>
                            <div className = 'text-cont'><span>等级：</span> 小蜜粉 <span style = {{marginLeft:'.13rem'}}>蜜粉值：</span> 0 </div>
                        </div>

                    </section>
                        {/* 全部订单部分 order*/}
                        <LogConChild />
                        {/* 优惠券部分  coupon */}
                        <LogConCoup />
                        {/* 立即下载部分 loading */}
                    <section className = 'loading'>
                        <div className = 'loaded-img'>
                            <img   src= 'https://img.miyabaobei.com/d1/p5/2016/11/14/e0/71/e07150ac278ec51756e2649008287c1b197297068.jpg'/>
                        </div>
                        <div className = 'loaded'>
                            <p className ='pText'>立即下载</p>
                        </div>
                    </section>
                        {/* 退出登录部分 logout */}
                    <section className = 'logout' onClick = {this.logOut}>
                        <div className = 'out'>退出登录</div>
                    </section>
                </main>

        )
    }
}
export default LoginContent