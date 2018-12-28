export default (state = 0, akcja) => {
    switch (akcja.type) {
      case 'ZWIEKSZ':
        return state + 1
      case 'ZMNIEJSZ':
        return state - 1
      default:
        return state
    }
}