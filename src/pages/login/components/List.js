import React, { Component } from 'react'
import LoginHeader from './LoginHeader'
import {Switch,Route,Redirect} from 'react-router-dom'
import Lxz from '../../classify/index'
import Ljp from '../../home/index'
import { Tabs } from 'antd'
import '../../../assets/css/login/list.css'
const { TabPane } = Tabs;

class List extends Component {
    constructor(props){
        super(props)
        this.state= {
            data:[]
        }
    }
    render() {
        return (
            <>
                <LoginHeader />
                <Tabs >
                    <TabPane tab="全部" key="1">
                    </TabPane>
                    <TabPane tab="待付款" key="2">
                        <Lxz />
                    </TabPane>
                    <TabPane tab="待发货" key="3">
                      <Ljp />
                    </TabPane>
                    <TabPane tab="待收货" key="4">
                    </TabPane>
                    <TabPane tab="待评价" key="5">
                        Content of tab 5
                    </TabPane>
                </Tabs>
            </>
        );
    }
}
 

export default List