import React from 'react'
import { connect } from 'react-redux'
import { mutations } from './store'


const TodoInputComponent = ({ submitTodo }) => (

    <form onSubmit={submitTodo}> 
        <input class='input-group mb-3' type='text' placeholder='new todo' />
        <button class='btn btn-primary' type='submit'> add this Todo! </button>
    </form>
)


const mstp = () => ({})
const mdtp = (dispatch) => ({
    submitTodo(e){
        e.preventDefault()
        let input = e.target.elements[0]
        let value = input.value

        if (value) {
            dispatch(mutations.createTodo(value))
            input.value = ''
        }
    }
})

export default connect(mstp, mdtp)(TodoInputComponent)
