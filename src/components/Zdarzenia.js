import React, { Component } from 'react';

// Zdarzenia obsługuje się całkowicie deklaratywnie
// Nie musisz się też martwić tym, aby w odpowiedniej chwili
//      odpiąć zdarzenia gdy komponent jest niszczony — react robi to za Ciebie.
// Listę wszystkich eventów w React można znaleźć tutaj: 
//      Dokumentacja SyntheticEvent.

// function Zdarzenia(){
//     return (
//         <button onClick={() => alert('Kliknięto!') }>Kliknij!</button>  
//     );
// }

// Nie musisz przecież tworzyć funkcji wewnątrz JSX, a wręcz jest to niewskazane. 
//   Najlepiej funkcję zdefiniować wcześniej i dalej tylko się do niej odwołać:
function onClickHandler() {
    alert('Kliknięto!');
}
function Zdarzenia() {
    return (
        <button onClick={onClickHandler}>Kliknij!</button>
    );
}

export default Zdarzenia;