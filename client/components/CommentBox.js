import React, { Component } from 'react';
import { connect } from 'react-redux'
import  '../styles/appStyle.css';


class CommentBox extends Component {

    render() {
        let { isShowing } = this.props;
        return (<div>
            { isShowing &&
                <div>
                <h1>Hello, world</h1>
                 <button className="btn" onClick={() => this.getTextAndConfirm()}>OK</button>
                </div>
            }
        </div>
        )
    }
    getTextAndConfirm() {
        let text = this.confirmInput.value
        this.props.onConfirm(text)
    }
}

const mapStateToComponent = (state) => {
  return {
    isShowing: state.modalBox.isShowing
  }
}

export default connect(mapStateToComponent)(CommentBox);
