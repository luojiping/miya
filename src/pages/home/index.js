// 解析jsx语法
import React, { Component,Fragment } from "react";
import Header from "./components/header/header"
import Footer from "./components/footer/footer";
import 'antd-mobile/dist/antd-mobile.css';

class Index extends Component {
   render(){
       return (
           <Fragment>
               <Header/>
               <Footer/>
           </Fragment>
       )
   }
}
export default Index