import React, { Component } from 'react';


class AppHeader extends React.Component {
    render(){
        return (
            <header className="ui fixed menu">
                <nav className="ui container">
                    <a href="#" className="header item">
                        <img className="logo" src="../img/cropped-typeofweb_logo-04.png" />
                        Lista kontaktów
                    </a>
                    <div className="header item">
                        <button className="ui button" onClick={this.onClickHandler}>Dodaj</button>
                    </div>
                </nav>
            </header>
        );
    }
    onClickHandler() {
        console.log('Kliknięto element li');
    }
}

// function AppHeader() {
//     return (
//       <header className="ui fixed menu">
//             <nav className="ui container">
//                 <a href="#" className="header item">
//                     <img className="logo" src="../img/cropped-typeofweb_logo-04.png" />
//                     Lista kontaktów
//                 </a>
//                 <div className="header item">
//                     <button className="ui button">Dodaj</button>
//                 </div>
//             </nav>
//         </header>
//     );
// }

export default AppHeader;