import React, { Component } from "react";
import { Layout, Menu } from 'antd';
import axios from 'axios';
import ClassifyCon from './classifyCon';
import 'antd/dist/antd.css';
const { Content, Sider } = Layout;
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar:[
                {"pid":"6811", "c_name":"独家甄选"},
                {"pid":"18657","c_name":"超级工厂"},
                {"pid":"32","c_name":"奶粉辅食"},
                {"pid":"68","c_name":"宝宝用品"},
                {"pid":"73","c_name":"美妆护肤"},
                {"pid":"14926","c_name":"个性清洁"},
                {"pid":"2537","c_name":"服饰鞋包"},
                {"pid":"83","c_name":"童装童鞋"},
                {"pid":"78","c_name":"食品保健"},
                {"pid":"74","c_name":"家居厨具"},
                {"pid":"70","c_name":"玩具书籍"},
                {"pid":"17282","c_name":"家用电器"},
                {"pid":"14913","c_name":"手机数码"},
                {"pid":"67","c_name":"孕产母乳"},
                {"pid":"18405","c_name":"汽车用品"},
                {"pid":"18545","c_name":"亲子服务"},
                {"pid":"18165","c_name":"充值生活"}
            ]
        }
    }
    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '83vh',
                        position: 'fixed',
                        left: 0,
                        fontSize: 16
                    }}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['6811']}>
                        {
                            this.state.navbar.map((item, index) => {
                                return <Menu.Item key={item.pid}  onClick={this.handleClick.bind(this,item.pid)}><span className="nav-text">{item.c_name}</span></Menu.Item>
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ background: '#fff', height: '100%', overflow: 'initial' }}>
                        <div style={{ paddingLeft: 120, background: '#fff',marginBottom:50}}>
                            <ClassifyCon  son_category= {this.state.son_category}/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
    componentDidMount() {
        axios("/api/search/getCategoryClassify?pid=6811")
        .then(res=>{
            this.setState({
                son_category:res.data.categorysInfos.son_category
            })
        })
    }
    handleClick = (id) => {
        axios("/api/search/getCategoryClassify?pid="+id)
        .then(res=>{
            this.setState({
                son_category:res.data.categorysInfos.son_category
            })
        })
    }
}
export default NavBar;

