import React, { Component } from 'react'
// 引入axios，请求数据
import axios from "axios"
// 图片懒加载
import { LazyLoadImage, LazyLoadBackgroundImage } from '@tjoskar/react-lazyload-img'
import "../../../../assets/css/home/lists.css"
class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3067935253,3094441212&fm=11&gp=0.jpg"
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="second">
                <ul className="types">
                    <li className="type">
                        <img src="https://img.miyabaobei.com/d1/p6/2019/10/29/88/e2/88e2c3d4c19ea96fc713773180961f1d198788135.png" />
                        <div className="title">全部</div>
                    </li>
                    {
                        this.state.data.cate_list && this.state.data.cate_list.map((item) => {
                            return (
                                <li className="type" key={item.id}>
                                    {/* <img src={item.icon} /> */}
                                    <LazyLoadImage defaultImage={this.state.img} image={item.icon} />
                                    <div className="title">{item.title}</div>
                                </li>
                            )
                        })
                    }

                </ul>
                <div className="secondlists">
                    {
                        this.state.data.data_list && this.state.data.data_list.map((item) => {
                            return (
                                <dl className="secondlist" key={item.sku}>
                                    <dt className="pricture">
                                        {/* <img src={item.picture} /> */}
                                        <LazyLoadImage defaultImage={this.state.img} image={item.picture} />
                                    </dt>
                                    <dd className="about">
                                        <div className="title">{item.name}</div>
                                        <div className="sale">
                                            <div className="wholesale">
                                                <div className="already">已拼{item.sale_count_text}万</div>
                                                <div className="price">￥{item.groupon_price}</div>
                                            </div>
                                            <div className="go">去拼团</div>
                                        </div>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("https://m.mia.com/instant/groupon/common_list/1/" + this.props.listId + "/")
            .then(res => {
                // console.log(res.data)
                this.setState({
                    data: res.data
                })
            })
    }
}
export default Lists
