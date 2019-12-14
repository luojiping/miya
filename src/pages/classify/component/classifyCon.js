import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
class classifyCon extends Component {
    render() {
        return (
            <Fragment>
               {
                    this.props.son_category&&this.props.son_category.map((items,indexs)=>{
                        return (
                            <div className="proCon" key={indexs}>
                                <p className="title">{items.title}</p>
                                <div className="conBox">
                                    {
                                        items.categorys.map((item,index)=>{
                                            return (
                                                <dl onClick={this.handleJumpList.bind(this,item.p_id)} key={index}>
                                                    <dd>
                                                        <img className= {!item.c_name?"imgSize":""} src={item.banner_image} />
                                                    </dd>
                                                    <dt>
                                                        {item.c_name}
                                                    </dt>
                                                </dl>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </Fragment>

        )

    }

    handleJumpList(id) {
        this.props.history.push("/classify/classifyList/cat"+id+"_jh1.html");
    }
}
export default withRouter(classifyCon);