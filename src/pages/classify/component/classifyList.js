import React, { Component } from 'react';
import { Tabs,Menu, Icon } from 'antd';
import axios from 'axios';
import ClassifyListList from "./classifyListList";
import Footer from  "../../../component/footer/footer";
import "../../../assets/css/classify/classifyList.css";
const { TabPane } = Tabs;
const { SubMenu } = Menu;
class classifyList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tab:[
                    {
                        choose_name:"人气",
                        order:"normal"

                    },
                    {
                        choose_name:"销量",
                        order:"sales"
                    },
                    {
                        choose_name:"新品",
                        order:"newest"
                    },
                    {
                        choose_name:"价格",
                        order:"price"
                    }
            ],
            goods:[]
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render() {
        return (
            <div className="classifyList">
                    {/* 搜索框 */}
                    <div className="searchBox">
                        <div className="search">
                            <img className="magnifier" src="https://img.miyabaobei.com/d1/p6/2019/05/09/6a/36/6a360af04ac4edbbf357c88a3b94e42e012161140.png"/>
                            <input className="searchTxt"/>
                        </div>
                    </div>
                    {/* 标签页 */}
                     <Menu onClick={this.handleClick} selectedKeys={[this.state.tab]} mode="horizontal">
                        {
                            this.state.tab.map((item,index)=>{
                                return (
                                    <Menu.Item 
                                        key={index}
                                        onClick={this.handleTab.bind(this,item.order)}
                                    >
                                    {item.choose_name}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                    {/* 产品类别 */}
                    <div className="proclassify">
                        <ul className="proclassifyBox">
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                            <li>蜜芽自营</li>
                        </ul>
                    </div>
                    {/* 产品列表 */}
                    <ul className="proList">
                        <ClassifyListList  goods={this.state.goods}/>
                        <li className="loading">加载失败，请稍后重试</li>
                    </ul>
                <Footer/>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/s/'+this.props.match.params.id+'?order=normal&page=1')
        .then(res=>{
            this.setState({
                goods:res.data
            })
        })
    }
    handleTab(order) {
        axios.get('/api/s/'+this.props.match.params.id+'?order='+order+'&page=1')
        .then(res=>{
            console.log(res);
            this.setState({
                goods:res.data
            })
        })
    }
}

export default classifyList;
