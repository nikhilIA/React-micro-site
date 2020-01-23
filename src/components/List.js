import React, {Component}  from 'react'



class List extends Component{
    render(){
        return(
            <ol>
            {this.props.studentList.map((name, index) =>
            <li key={index}>{name} <button onClick={() => this.props.onRemoveName(name)}>Delete</button></li>
            )}
            </ol> 
        )
    }
}

export default List