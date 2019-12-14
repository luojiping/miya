import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import Conent from "../content/conent.js"
import Lists from "../content/lists.js"
import "../../../../assets/css/home/tabbar.css";

class TabBar extends Component {
    state = {
        tabs: [
            { title: '首页', id: "0" },
            { title: '母婴', id: "21" },
            { title: '玩具', id: "22" },
            { title: '孕产', id: "23" },
            { title: '美妆', id: "24" },
            { title: '美食', id: "25" },
            { title: '童装', id: "26" },
            { title: '百货', id: "27" },
            { title: '女装', id: "28" },
            { title: '生鲜', id: "29" },
        ]
    }
    // renderContent = tab =>
    //     (
    //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    //             {/* {
    //                 this.state.tabs.map((item, index) => {
    //                     return (
    //                         // console.log(item.id)
    //                         item.id === 0 ? (<Conent />) : (<Lists tabId={item.id} />)
    //                     )
    //                 })
    //             } */}
    //         </div>
    //     );
    render() {
        return (
            <div className="tabbar">
                <Tabs tabs={this.state.tabs} renderTabBar={props =>
                    <Tabs.DefaultTabBar
                        {...props} page={7}
                    />}>
                    <Conent />
                    <Lists listId={this.state.tabs[0].id} />
                    <Lists listId={this.state.tabs[1].id}/>
                    <Lists listId={this.state.tabs[2].id}/>
                    <Lists listId={this.state.tabs[3].id}/>
                    <Lists listId={this.state.tabs[4].id}/>
                </Tabs>

            </div>
        )
    }
}
export default TabBar
