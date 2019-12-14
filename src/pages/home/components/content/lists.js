import React, { Component } from 'react'

class Lists extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <p>Content of {this.props}</p>  */}
                aaa{this.props.listId}
            </div>
        )
    }
}
export default Lists
