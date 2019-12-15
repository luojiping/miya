import React, { Component } from 'react'
import {Link,withRouter} from "react-router-dom";
import axios from "axios"
import "../../../../assets/css/home/homeList.css"
// 图片懒加载
import { LazyLoadImage, LazyLoadBackgroundImage } from '@tjoskar/react-lazyload-img'
class HomeList extends Component {
    state = {
        data: [],
        img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3067935253,3094441212&fm=11&gp=0.jpg"
    }
    // 回退，要想使用路由里面的信息，必须要让组件被react-router-dom里面的withRouter包裹起来。
    goBack(e){
        this.props.history.go(-1)
    }
    render() {
        return (
            <>
                <div className="homeHeader">
                    <span className="iconfont icon-huitui" onClick={this.goBack.bind(this)}></span>
                    <span>拼美食</span>
                    <span className="iconfont icon-kefucopy"></span>
                </div>
                <div className="homeList">
                    {
                        this.state.data.data_list && this.state.data.data_list.map(item => {
                            return (
                                <dl className="saleLists" key={item.sku}>
                                    <dt className="img">
                                        <LazyLoadImage defaultImage={this.state.img} image={item.picture} />
                                        {/* <img src={item.picture} /> */}
                                    </dt>
                                    <dd className="saleList">
                                        <div className="saleTop">
                                            <div className="title">{item.name}</div>
                                            <div className="introduce">{item.intro}</div>
                                            <div className="sale">已售<span>{item.sale_count_text}件</span></div>
                                        </div>
                                        <div className="saleBottom">
                                            <div className="priceLeft">
                                                <div className="alone">单独购买<span>￥{item.sale_price}</span></div>
                                                <div className="price">￥{item.groupon_price}</div>
                                            </div>
                                            <div className="go">去开团</div>
                                        </div>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
            </>
        )
    }
    componentDidMount() {
        axios.get("https://m.mia.com/instant/groupon/common_list/1/25/?cate_id=25&page=1")
            .then(res => {
                console.log(res.data.data_list)
                this.setState({
                    data: res.data
                })
            })
    }
}
export default withRouter(HomeList)
