// this file will export our redux store

import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const preloadedState = {
    showComplete: true,
    todos: [{
        id: uuid(),
        name: 'rent a car',
        done: true
    }, {
        id: uuid(),
        name: 'buy beer',
        done: false
    }, {
        id:uuid(),
        name: 'get ice',
        done: true
    }, {
        id:uuid(),
        name: 'set up tent',
        done: false
    }]
}

export const mutations = {
    completeTodo(id) {
        return {id, type:'complete_todo'}
    },
    toggleShowComplete() {
        return {type:"toggle_show_complete"}
    }
}


// redux needs a reducer to return a store 
// a reducer is a function that takes 2 arguments, a state and an action and returns a new state
// reducers are pure functions, given the same arguments they always return the same result 


//    Example without combined reducers
// const reducer = (state, action) => {
//     console.log(action, "**")
//     switch (action.type) {
//         case 'complete_todo':
//             const todos = state.todos
//             const newTodos = todos.map(todo => todo.id === action.id ? { ...todo, done: true } : todo)
//             const newState = {
//                 ...state,
//                 todos: newTodos
//             }
//             return newState
//         case "toggle_show_complete":
//             return {
//                 ... state,
//                 showComplete: !state.showComplete
//             }
//     }
//     return state // when action.type is not 'complete_todo'
// }




const reducer = combineReducers ({
    todos(todos = [], action) {
        switch (action.type) {
            case 'complete_todo':
                return todos.map(todo => todo.id === action.id ? { ...todo, done: true } : todo)
        }
        return todos
    },
    showComplete(showComplete = true, action) {

        switch (action.type) {
            case "toggle_show_complete":
                return !showComplete
    }
    return showComplete
    }
})



export const store = createStore(reducer, preloadedState)