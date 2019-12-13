import React,{Component} from 'react'
import { Avatar,Icon } from 'antd'
class LoginContent extends Component{
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
                    <section className = 'order'>
                        {/* 后期配置路由 进行数据的渲染 */}
                        <figure>
                            <Icon type="profile" className = 'icon'/> 
                            <figcaption>全部订单</figcaption>
                        </figure>
                        <figure>
                            <Icon type="save" className = 'icon' /> 
                            <figcaption>待付款</figcaption>
                        </figure>
                        <figure>
                            <Icon type="bar-chart" className = 'icon' /> 
                            <figcaption>待发货</figcaption>
                        </figure>
                        <figure>
                            <Icon type="gift" className = 'icon' /> 
                            <figcaption>待收货</figcaption>
                        </figure>
                        <figure>
                            <Icon type="edit" className = 'icon' /> 
                            <figcaption>待评价</figcaption>
                        </figure>


                    </section>
                        {/* 优惠券部分  coupon */}
                    <section className = 'coupons'>
                        <div className  = 'coup'>
                            <span className = 'span1' ><Icon type="instagram" theme="filled"  className = 'icons' /> 优惠券</span>
                            <span className = 'span1 span2' >24张未使用 <Icon style = {{paddingLeft:'.18rem'}} type="right" /></span>
                        </div>
                        <div className  = 'coup'>
                            <span className = 'span1' ><Icon type="mobile" theme="filled"  className = 'icons icons1' /> 红包</span>
                            <span className = 'span1 span2' >0张未使用 <Icon style = {{paddingLeft:'.18rem'}} type="right" /></span>
                        </div>
                        <div className  = 'coup'>
                            <span className = 'span1' ><Icon type="contacts" theme="filled" className = 'icons icons2' /> 实名认证 </span>
                            <span className = 'span1 span2' >未认证 <Icon style = {{paddingLeft:'.18rem'}} type="right" /></span>
                        </div>
                        <div className  = 'coup coups'>
                            <span className = 'span1'><Icon type="mobile" theme="filled"  className = 'icons icons1' /> 联系客服</span>
                            <span className = 'span1 span3' >10108088 <Icon style = {{paddingLeft:'.18rem',color:'#999'}} type="right" /></span>
                        </div>
                        <div className  = 'coup coups'>
                            <span className = 'span1' ><Icon type="mobile" theme="filled"  className = 'icons icons1' /> 账户绑定手机号码</span>
                            <span className = 'span1 span3' >13993833534 <Icon style = {{paddingLeft:'.18rem',color:'#999'}} type="right" /></span>
                        </div>
                    </section>
                        {/* 立即下载部分 loading */}
                    <section className = 'loading'>
                        <div className = 'loaded-img'>
                            <img   src= 'https://img.miyabaobei.com/d1/p5/2016/11/14/e0/71/e07150ac278ec51756e2649008287c1b197297068.jpg'/>
                        </div>
                        <div className = 'loaded'>
                            <p>立即下载</p>
                        </div>
                    </section>
                        {/* 退出登录部分 logout */}
                    <section className = 'logout'>
                        <div className = 'out'>退出登录</div>
                    </section>
                </main>

        )
    }

}
export default LoginContent