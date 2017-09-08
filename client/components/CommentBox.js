import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelection } from '../actions/actionCreaters';
import  '../styles/appStyle.css';


class CommentBox extends Component {
    constructor(props) {
        super(props);
        // console.log('super props:-'. this.props);
        // const pre = this.props.modalBox.pre;
    }
    renderOptions(c,i) {
        // console.log('renderOptions:-',a,b);
        return (<option value={c.vaule} key={i}>{c.value}</option>);
    }
    setSelection(e) {
        console.log(e.target.value);
        this.props.changeSelection(e.target.value);
    }
    render() {
        console.log(this.props.modalBox);
        let { isShowing, selectOptions, pre } = this.props.modalBox;
        return (<div>
            { isShowing &&
                <div>
                <select ref="select_it" value={pre} onChange={(e) => this.setSelection(e)}>
                        {selectOptions.map(this.renderOptions)}
                </select>
                <button className="btn" onClick={() => this.getTextAndConfirm()}>OK</button>
                <h1>Hello, world</h1>
                 <button className="btn" onClick={() => this.getTextAndConfirm()}>OK</button>
                </div>
            }
        </div>
        )
    }
    getTextAndConfirm() {
        const t = this.refs.select_it.value;
        console.log('this is selected:-', t);
        // let text = this.confirmInput.value
        // this.props.onConfirm(text)
    }
}

const mapStateToComponent = (state) => {
  return {
    isShowing: state.modalBox.isShowing
  }
}

const mapDispachToProps = (dispatch) => {
    return {
        changeSelection: (prep)=> {dispatch(changeSelection(prep))}
    }
}
export default connect(mapStateToComponent, mapDispachToProps)(CommentBox);
