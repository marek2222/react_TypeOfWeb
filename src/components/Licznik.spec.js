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
    it('powinien wyświetlić licznik', () => {
        const { p } = setup()
        expect(p.text()).toMatch(/^Kliknięto: 0 razy/)
    })

    it('pierwszy przycisk powinien wywoływać akcję przyZwiekszaniu', () => {
        const { buttons, akcje } = setup()
        buttons.at(0).simulate('click')
        expect(akcje.przyZwiekszaniu).toBeCalled()
    })

    it('drugi przycisk powinien wywoływać akcję przyZmniejszaniu', () => {
        const { buttons, akcje } = setup()
        buttons.at(1).simulate('click')
        expect(akcje.przyZmniejszaniu).toBeCalled()
    })

      it('trzeci przycisk nie powinien wywoływać akcję przyZwiekszaniu jeśli licznik jest parzysty', () => {
        const { buttons, akcje } = setup(42)
        buttons.at(2).simulate('click')
        expect(akcje.przyZwiekszaniu).not.toBeCalled()
      })

      it('trzeci przycisk powinien wywoływać akcję przyZwiekszaniu jeśli licznik jest nieparzysty', () => {
        const { buttons, akcje } = setup(43)
        buttons.at(2).simulate('click')
        expect(akcje.przyZwiekszaniu).toBeCalled()
      })

      it('trzeci przycisk powinien wywoływać akcję przyZwiekszaniu jeśli licznik jest parzysty i ujemny', () => {
        const { buttons, akcje } = setup(-43)
        buttons.at(2).simulate('click')
        expect(akcje.przyZwiekszaniu).toBeCalled()
      })

      it('czwarty przycisk powinien wywoływać przyZwiekszaniu po sekundzie', (done) => {
        const { buttons, akcje } = setup()
        buttons.at(3).simulate('click')
        setTimeout(() => {
            expect(akcje.przyZwiekszaniu).toBeCalled()
            done()
        }, 1000)
    })
})