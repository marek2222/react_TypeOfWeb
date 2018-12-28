import React from 'react'
import { shallow } from 'enzyme'
import Licznik from './Licznik'

function setup(wartosc = 0) {
    const akcje = {
        przyZwiekszaniu: jest.fn(),
        przyZmniejszaniu: jest.fn()
    }
    const komponent = shallow(
        <Licznik wartosc={wartosc} {...akcje} />
    )

    return {
        komponent: komponent,
        akcje: akcje,
        buttons: komponent.find('button'),
        p: komponent.find('p')
    }
}

describe('Licznik komponent', () => {
    it('should display count', () => {
        const { p } = setup()
        expect(p.text()).toMatch(/^Clicked: 0 times/)
    })

    it('first button should call przyZwiekszaniu', () => {
        const { buttons, akcje } = setup()
        buttons.at(0).simulate('click')
        expect(akcje.przyZwiekszaniu).toBeCalled()
    })

    it('second button should call przyZmniejszaniu', () => {
        const { buttons, akcje } = setup()
        buttons.at(1).simulate('click')
        expect(akcje.przyZmniejszaniu).toBeCalled()
    })

    //   it('third button should not call przyZwiekszaniu if the counter is even', () => {
    //     const { buttons, akcje } = setup(42)
    //     buttons.at(2).simulate('click')
    //     expect(akcje.przyZwiekszaniu).not.toBeCalled()
    //   })

    //   it('third button should call przyZwiekszaniu if the counter is odd', () => {
    //     const { buttons, akcje } = setup(43)
    //     buttons.at(2).simulate('click')
    //     expect(akcje.przyZwiekszaniu).toBeCalled()
    //   })

    //   it('third button should call przyZwiekszaniu if the counter is odd and negative', () => {
    //     const { buttons, akcje } = setup(-43)
    //     buttons.at(2).simulate('click')
    //     expect(akcje.przyZwiekszaniu).toBeCalled()
    //   })

    //   it('fourth button should call przyZwiekszaniu in a second', (done) => {
    //     const { buttons, akcje } = setup()
    //     buttons.at(3).simulate('click')
    //     setTimeout(() => {
    //       expect(akcje.przyZwiekszaniu).toBeCalled()
    //       done()
    //     }, 1000)
    //   })
})