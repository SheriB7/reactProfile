import React from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import PortfolioContainer from "./components/PortfolioContainer";
import Projects from "./components/Projects";


    const App = () => <PortfolioContainer />;
    <>
      <NavTabs />
      <Header />
      <PortfolioContainer />
      <Projects />
    </>




export default App;

// import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";

// const App = () => <PortfolioContainer />;

// export default App;



// import logo from './logo.svg';
// import './App.css';

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
