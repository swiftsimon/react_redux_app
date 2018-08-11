import React from 'react'
import { connect } from 'react-redux'


const Counter = ({ todoCount }) => {
    return(
        <div> You have { todoCount } todos</div>
    )
}

const mapStateToProps = state => ({
    todoCount: state.todos.length
})

export default connect(mapStateToProps)(Counter)