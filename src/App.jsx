import React from 'react'
import { connect } from 'react-redux'


export const App = ({ todos }) => {
    return (
        <div> This is the App
            <div>
                <ul>
                    { todos.map(item => {
                            return(
                                <li>
                                    { item.name }
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
// OR const mapStateToProps = (state) => ({ state }) to return all of state

const mapDispatchToProps = () => {}

export const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App)  // App is the component to be wrapper 
