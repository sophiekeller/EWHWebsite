import React from 'react';

//COMPONENTS

//SCREENS
import Home from "./screens/Home.js";
//STYLES
import "./App.css";
import "./assets/styles/styles.css";

export default class App extends React.Component{
    render(){
    return (
      <Home/>
    );
    }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
