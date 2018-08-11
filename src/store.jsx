// this file will export our redux store

import { createStore } from 'redux'
import uuid from 'uuid'

const preloadedState = {
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
    }
}


// redux needs a reducer to return a store 
// a reducer is a function that takes 2 arguments, a state and an action and returns a new state
// reducers are pure functions, given the same arguments they always return the same result 

const reducer = (state, action) => {
    console.log(action, "**")
    switch (action.type) {
        case "complete_todo":
        console.log(action.type, state)
        const todos = state.todos
        const newTodos = todos.map(todo=> todo.id === action.id ? {...todo, done: true} : todo)
        const newState = {
            ...state,
            todos: newTodos
        }
        return newState
    }
    return state
}

export const store = createStore(reducer, preloadedState)