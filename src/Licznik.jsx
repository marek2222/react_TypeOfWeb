import * as React  from 'react'
import PropTypes from 'prop-types'


class Licznik extends React.Component {
    state = {
    }

    render() {
        const { wartosc, przyZwiekszeniu, przyZmniejszeniu } = this.props

        return (
        <p>
                Kliknięto: {wartosc} razy {' '}
                <button onClick={przyZwiekszeniu}>+</button>{' '}
                <button onClick={przyZmniejszeniu}>-</button>    {' '}
            </p>
        );
    }
}

Licznik.propTypes = {
    wartosc:               PropTypes.number.isRequired, 
    przyZwiekszeniu:    PropTypes.func.isRequired, 
    przyZmniejszeniu:   PropTypes.func.isRequired
}

export default Licznik