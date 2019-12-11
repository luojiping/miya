import React, { Component } from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import "../../../../assets/css/home/banner.css"
class Banner extends Component {
    state = {
        data: ['12/06/91/af/91af3be260319a30b2a2cfe488044679263313977','08/27/d7/d9/d7d92e7a9159461b1147775e34105fa4724699365'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['12/06/91/af/91af3be260319a30b2a2cfe488044679263313977','08/27/d7/d9/d7d92e7a9159461b1147775e34105fa4724699365'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank style={{ width: "100%", height: "100%" }}>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            //   href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://img08.miyabaobei.com/d1/p6/2019/${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}
export default Banner