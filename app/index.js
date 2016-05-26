import React from 'react'
import { createStore } from 'redux'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import myApp from './reducers/myApp'
import App from './components/App'

let store = createStore(myApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
