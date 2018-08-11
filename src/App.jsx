import React from 'react'
import { connect } from 'react-redux'
import CounterWrapper from './Counter'
import { mutations } from './store'
import ShowCompleteToggleWrapper from './ShowCompleteToggle'
import TodoInputWrapper from './TodoInput'


export const App = ({ todos, doTodo, deleteTodo }) => {  // export the 'dumb' App
    return (
        <div> This is the App
            <CounterWrapper />
            <ShowCompleteToggleWrapper />
            <div>
                <ul>
                    { todos.map(item => {
                            return(
                                <li key={ item.id }>
                                    { item.name } - { item.done ? 'done :)' : <button class='btn btn-primary' onClick={ () => doTodo(item.id) }>DO</button> }
                                    <button class='btn btn-secondary' onClick={ () => deleteTodo(item.id) }>delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <TodoInputWrapper />
        </div>
    )
}


// methods of Redux
const mapStateToProps = (state) => ({
    todos: state.todos.filter(todo => !state.showComplete ? true : !todo.done)
})
// OR const mapStateToProps = (state) => ({ state }) to return/pass in all of state

const mapDispatchToProps = (dispatch) => ({  // get methods into components
    doTodo(id) {
        const action = mutations.completeTodo(id)
        dispatch(action)
    },
    deleteTodo(id) {
        const action = mutations.deleteTodo(id)
        dispatch(action)
    }
})

export const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App)  // App is the component to be wrapper 
