import React,{Component} from 'react';
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "@/assets/css/classify/model.css";

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
      return (
            <WingBlank>
                <Button onClick={this.showModal('modal2')}>
                    <span  className="addCart">
                        <img src="https://img.miyabaobei.com/d1/p6/2019/01/04/b9/a6/b9a601c25385e0d8e3f622437311342f987885336.png"/>
                    </span>
                </Button>
                <WhiteSpace />
                <Modal
                popup
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                animationType="slide-up"
                closable={true}
                >
                <List  className="popup-list">
                    <List.Item>
                        <div className="alertBox">
                            <div className="alertImgBox">
                                <img src={this.props.product.m_search_pic} />
                            </div>
                            <div className="alertR">
                                <div className="close"  onClick={this.onClose('modal2')}>
                                    <span>
                                        <i className="daole">￥</i>
                                        <i className="newPrice">{this.props.product.real_price}</i>
                                    </span>
                                </div>
                                <span className="kucun">库存充足</span>
                                <span className="yixuan">已选L54片*2(9-14kg)</span>
                            </div>
                        </div>
                    </List.Item>
                    <List.Item>规格</List.Item>
                    <List.Item>
                        <span className="guige">L54片*2(9-14kg)</span>
                    </List.Item>    
                    <List.Item>
                        <Button type="primary" onClick={this.onClose('modal2')}>加入购物车</Button>
                    </List.Item>
                </List>
                </Modal>
            </WingBlank>
        )
    }
}


export default Model;