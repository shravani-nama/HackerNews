import React,{Component} from 'react';
import classes from './Header.module.css';
class Header extends Component{
  render(){
    return (
      <div className={classes.Header}>
        <span>Comments</span>
        <span className={classes.voteC}>Vote Count</span>
        <span>UpVote</span>
        <span>News Details</span>
      </div>
    );
  }
}

export default Header;
