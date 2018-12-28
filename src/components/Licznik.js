import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Licznik extends Component {
    // constructor(props) {
    //     super(props);
    //     this.incrementAsync = this.incrementAsync.bind(this);
    //     this.incrementIfOdd = this.incrementIfOdd.bind(this);
    // }

    // incrementIfOdd() {
    //     if (this.props.wartosc % 2 !== 0) {
    //     this.props.przyZwiekszaniu()
    //     }
    // }

    // incrementAsync() {
    //     setTimeout(this.props.przyZwiekszaniu, 1000)
    // }

    render() {
        const { wartosc, przyZwiekszaniu, przyZmniejszaniu } = this.props
        return (
        <p>
            Clicked: {wartosc} times {' '}
            <button onClick={przyZwiekszaniu}>+</button>{' '}
            <button onClick={przyZmniejszaniu}>-</button> {' '}
            {/*<button onClick={this.incrementIfOdd}>Increment if odd</button> {' '}
            <button onClick={this.incrementAsync}>Increment async</button> */}
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