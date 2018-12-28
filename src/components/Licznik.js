import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Licznik extends Component {

    incrementIfOdd = () => {
        if (this.props.wartosc % 2 !== 0) {
            this.props.przyZwiekszaniu()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.przyZwiekszaniu, 1000)
    }

    render() {
        const { wartosc, przyZwiekszaniu, przyZmniejszaniu } = this.props
        return (
        <p>
            Kliknięto: {wartosc} razy {' '}
            <button onClick={przyZwiekszaniu}>+</button>{' '}
            <button onClick={przyZmniejszaniu}>-</button> {' '}
            <button onClick={this.incrementIfOdd}>Zwiększa jeśli nieparzyste</button> {' '}
            <button onClick={this.incrementAsync}>Zwiększa asynchronicznie</button>
        </p>
        )
    }
}

Licznik.propTypes = {
    wartosc: PropTypes.number.isRequired,
    przyZwiekszaniu: PropTypes.func.isRequired,
    przyZmniejszaniu: PropTypes.func.isRequired
}

export default Licznik