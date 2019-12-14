import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import ClassifyListList from "./classifyListList";
import Footer from  "../../../component/footer/footer";
import "../../../assets/css/classify/classifyList.css";
const { TabPane } = Tabs;
class classifyList extends Component {
    render() {
        return (
            <div className="classifyList">
                <div>
                    {/* 搜索框 */}
                    <div className="searchBox">
                        <div className="search">
                            <img className="magnifier" src="https://img.miyabaobei.com/d1/p6/2019/05/09/6a/36/6a360af04ac4edbbf357c88a3b94e42e012161140.png"/>
                            <input className="searchTxt"/>
                        </div>
                    </div>
                    {/* 标签页 */}
                    <Tabs>
                        <TabPane tab="人气" key="1" />
                        <TabPane tab="销量" key="2" />
                        <TabPane tab="新品" key="3" />
                        <TabPane tab="价格" key="4" />
                    </Tabs>
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
                        <ClassifyListList/>
                        <ClassifyListList/>
                        <ClassifyListList/>
                        <ClassifyListList/>
                        <ClassifyListList/>
                        <ClassifyListList/>
                        <ClassifyListList/>
                        <ClassifyListList/>
                        <ClassifyListList/>
                    </ul>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default classifyList;
