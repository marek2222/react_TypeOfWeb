import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Licznik from './components/Licznik'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Licznik
    wartosc={store.getState()}
    przyZwiekszaniu={() => store.dispatch({ type: 'ZWIEKSZ' })}
    przyZmniejszaniu={() => store.dispatch({ type: 'ZMNIEJSZ' })}
  />,
  rootEl
)

render()
store.subscribe(render)


// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import './index.css'
// import { createStore } from 'redux'
// import Licznik  from './Licznik'
// import licznik  from './Reducer'

// const store = createStore(licznik)

// const render = () => ReactDOM.render( 
//     <Licznik 
//         wartosc = { store.getState() }
//         przyZwiekszeniu = { () => store.dispatch({ type: 'ZWIEKSZ' }) } 
//         przyZmniejszeniu = { () => store.dispatch({ type: 'ZMNIEJSZ' }) } 
//     /> , 
//     document.getElementById('root')
// )

// render()
// store.subscribe(render)
