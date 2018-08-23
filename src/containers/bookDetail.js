import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    renderBook(){
        if(this.props.activeBook != null){
            return (
                <div>
                    <h3>Details for:</h3>
                    <div>Title: {this.props.activeBook.title}</div>
                    <div>Number of pages: {this.props.activeBook.pages}</div>
                </div>
            );
        }
        return (
                <div>
                    <h3>Select a book to get started.</h3>
                </div>
                );
    }

    render(){
        return(
                <div>
                   {this.renderBook()}
                </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activeBook:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)

