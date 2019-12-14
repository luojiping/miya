import React, { Component } from 'react'

class Lists extends Component {
    render() {
        return (
            <div>
                {/* <p>Content of {this.props}</p>  */}
                aaa{this.props.listId}
            </div>
        )
    }
}
export default Lists
