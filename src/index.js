import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import Licznik  from './Licznik'
import licznik  from './Reducer'

const store = createStore(licznik)

const render = () => ReactDOM.render( 
    <Licznik 
        wartosc = { store.getState() }
        przyZwiekszeniu = { () => store.dispatch({ type: 'ZWIEKSZ' }) } 
        przyZmniejszeniu = { () => store.dispatch({ type: 'ZMNIEJSZ' }) } 
    /> , 
    document.getElementById('root')
)

render()
store.subscribe(render)
