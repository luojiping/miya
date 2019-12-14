import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
class ClassifyListList extends Component {
    render() {
        return (
           <Fragment>
                {
                     this.props.goods.length&&this.props.goods.map((item, index) => {
                        return (
                        <li key={item.picture}>
                            <div className="imgBox">
                                <img src={item.picture} alt="沛多力儿童成长绵羊奶调制乳粉"/>
                            </div>
                            <div className="proListR">
                                <div className="youhui">
                                    <p className="proListTit">{item.brand_name} {item.activity_short_title} </p>
                                    <span>自营</span>
                                    <span>直降</span>
                                </div>
                                <div className="priceBox">
                                    <span className="price"><i className="daole">￥</i><i className="newPrice">{item.real_price}</i><del>￥{item.market_price}</del></span>
                                    <span className="addCart"><img src="https://img.miyabaobei.com/d1/p6/2019/01/04/b9/a6/b9a601c25385e0d8e3f622437311342f987885336.png"/></span>
                                </div>
                            </div>
                        </li>
                        )
                    })
                }
            </Fragment>
        )
    }
}
export default withRouter(ClassifyListList);