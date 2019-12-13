import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
class classifyCon extends Component {
    render() {
        console.log(this.props.son_category);
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
                                                <dl onClick={this.handleJumpList} key={index}>
                                                    <dd>
                                                        <img className={!item.c_name?"imgSize":""} src={item.banner_image} />
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


    handleJumpList = () => {
        this.props.history.push("/classify/classifyList");
    }
}
export default withRouter(classifyCon);