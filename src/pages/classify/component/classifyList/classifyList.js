import React, { Component } from 'react';
import { Tabs,Menu } from 'antd';
import axios from 'axios';
import ClassifyListList from "./classifyListList";
import Footer from  "@/component/footer/footer";
import "@/assets/css/classify/classifyList.css";
class classifyList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            current:"0",
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
            goods:[],
            scrollTab:["蜜芽自营","蜜芽自营","蜜芽自营","蜜芽自营","蜜芽自营","蜜芽自营","蜜芽自营","蜜芽自营","蜜芽自营","蜜芽自营"]
        }
    }
    handleClick = e => {
        this.setState({
          current: e.key,
        });
      }

    render() {
        return (
            <div className="classifyList" ref="father">
                {/* 搜索框 */}
                <div className="searchBox">
                    <div className="search">
                        <img className="magnifier" src="https://img.miyabaobei.com/d1/p6/2019/05/09/6a/36/6a360af04ac4edbbf357c88a3b94e42e012161140.png"/>
                        <input className="searchTxt" placeholder="搜索输入数据"/>
                    </div>
                </div>
                {/* 标签页 */}
                <div ref = "xiding" className="tab">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
                </Menu>  </div>
                {/* 产品类别 */}
                <div className="proclassify">
                    <ul className="proclassifyBox">
                        {
                            this.state.scrollTab.map((item,index)=>{
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                {/* 产品列表 */}
                <ul className="proList">
                    <ClassifyListList  goods={this.state.goods}/>
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
        this.refs.father.addEventListener("scroll", this.stickyHeader.bind(this));
    }
    handleTab(order) {
        axios.get('/api/s/'+this.props.match.params.id+'?order='+order+'&page=1')
        .then(res=>{
            this.setState({
                goods:res.data
            })
        })
    }
    // 吸顶效果
    stickyHeader() {
        const scrollTop = this.refs.father.scrollTop;
        const xiding = this.refs.xiding;
        if(scrollTop > 44) {
            xiding.style.position = "fixed";
            xiding.style.top = 0;
            xiding.style.left = 0
        }else {
            xiding.style.position = "static";
        }
    }
}

export default classifyList;
