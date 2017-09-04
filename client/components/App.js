import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreaters';
import Main from './Main';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    modalBox: state.modalBox
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
