import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import "../../../../assets/css/home/tabbar.css";
import Banner from "../content/banner"
import Scroll from "../content/scroll"
import Rob from "../content/rob"

class TabBar extends Component {
    renderContent = tab =>
        (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            {/* <p>Content of {tab.title}</p> */}
        </div>
        );
    render() {
        const tabs = [
            { title: '首页' },
            { title: '母婴' },
            { title: '玩具' },
            { title: '孕产' },
            { title: '美妆' },
            { title: '美食' },
            { title: '童装' },
            { title: '百货' },
            { title: '女装' },
            { title: '生鲜' },
        ];
        return (
            <div>
                <Tabs tabs={tabs} renderTabBar={props =>
                    <Tabs.DefaultTabBar {...props} page={7}/>}>
                    {this.renderContent}
                </Tabs>
                <Banner style={{width:"100%;height:1.8rem"}}/>
                <Scroll/>
                <Rob/>
            </div>
        )
    }
}
export default TabBar
