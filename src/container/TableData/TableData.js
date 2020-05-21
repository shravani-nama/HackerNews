import React,{Component} from 'react';
import classes from './TableData.module.css';
import Table from 'react-bootstrap/Table'
class TableData extends Component{
    render(){
        return(
            <Table striped hover>
                <tbody>
                    <tr className={classes.tr}>
                        <td className={classes.comment}>1</td>
                        <td className={classes.voteCount}>96</td>
                        <td className={classes.upVote}><i className="fa">&#xf0d8;</i></td>
                        <td className={classes.newsDetails}>@mdo</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.comment}>2</td>
                        <td className={classes.voteCount}>34</td>
                        <td className={classes.upVote}><i className="fa">&#xf0d8;</i></td>
                        <td className={classes.newsDetails}>@fat</td>
                    </tr>
                    <tr className={classes.tr}>
                        <td className={classes.comment}>3</td>
                        <td className={classes.voteCount}>51</td>
                        <td className={classes.upVote}><i className="fa">&#xf0d8;</i></td>
                        <td className={classes.newsDetails}>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
export default TableData;