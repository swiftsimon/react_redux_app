// this file will export our redux store

import { createStore } from 'redux'

const preloadedState = {
    todos: [{
        name: 'rent a car'
    }, {
        name: 'buy beer'
    }, {
        name: 'get ice'
    }, {
        name: 'set up tent'
    }]
}

// redux needs a reducer to return a store 
// a reducer is a function that takes 2 arguments, a state and an action and returns a new state
// reducers are pure functions, given the same arguments they always return the same result 

const reducer = (state, action) => {
    return state
}

console.log(reducer)
export const store = createStore(reducer,preloadedState)