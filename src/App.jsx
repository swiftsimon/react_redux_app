import React from 'react'
import { connect } from 'react-redux'
import CounterWrapper from './Counter'
import { mutations } from './store'


export const App = ({ todos, doTodo }) => {  // export the 'dumb' App
    return (
        <div> This is the App
            <CounterWrapper />
            <div>
                <ul>
                    { todos.map(item => {
                            return(
                                <li key={ item.id }>
                                    { item.name } - { item.done ? 'done :)' : <button onClick={ () => doTodo(item.id) }>DO</button> }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


// methods of Redux
const mapStateToProps = (state) => ({todos: state.todos})
// OR const mapStateToProps = (state) => ({ state }) to return/pass in all of state

const mapDispatchToProps = (dispatch) => ({  // get methods into components
    doTodo(id) {
        const action = mutations.completeTodo(id)
        console.log('now completing todo', id)
        console.log("create action", action)
        dispatch(action)
    }
})

export const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App)  // App is the component to be wrapper 
