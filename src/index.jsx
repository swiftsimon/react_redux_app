import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import { Provider } from 'react-redux'  // it is a react component <Provider />

import { App, AppWrapper } from './App'


ReactDOM.render(
    <div>
        <Provider store={store}>
            <AppWrapper />
        </Provider>
    </div>,
    document.getElementById('AppContainer') // second argument is where to mount in DOM
)







