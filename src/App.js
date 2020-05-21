import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header'
import TableData from './container/TableData/TableData';
import {connect} from 'react-redux';
import * as actionTypes from './store/actions/actions';
import { addItems} from './store/actions/actions'
class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <TableData/>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return{
    newsDetails:state.newsDetails
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    onAddItem:()=>dispatch(addItems())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
