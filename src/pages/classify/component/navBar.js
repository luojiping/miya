import React, { Component } from "react";
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
const {Content, Sider } = Layout;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            navbar: ["独家甄选","超级工厂","奶粉辅食","宝宝用品","美妆护肤","个护清洁","服饰鞋包","童装童鞋","食品保健","家居厨具","玩具书籍","家用电器","手机数码","孕产母乳","汽车用品","亲子服务"]
        } 
    }
    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '80vh',
                        position: 'fixed',
                        left: 0,
                        fontSize: 16
                    }}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {
                        this.state.navbar.map((item,index)=>{
                        return <Menu.Item key={index}><span className="nav-text" onClick={this.handleClick}>{item}</span></Menu.Item>
                        })
                    }
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ background: '#fff',height:'100%', overflow: 'initial'}}>
                        <div style={{  paddingLeft: 110,background: '#fff'}}>
                            {/* <div className="proCon">
                                <p className="title">纸巾湿巾</p>
                                <div className="conBox">
                                    <dl>
                                        <img />
                                    </dl>
                                    <dt>
                                        抽纸
                                    </dt>
                                </div>
                            </div> */}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
    handleClick = ()=>{
        console.log(1);
    }
}

export default NavBar;

