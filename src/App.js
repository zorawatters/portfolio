import React from 'react';
import './App.css';
import Nav from "./components/nav";
import About from "./components/about";
import Projects from "./components/projects";
import Front from "./components/front";


// const landing =  (
//     <div className = "front-page"> 
//       <div className = "line1"></div>
//       <div>Zora Watters</div>
//       <div className="line2"></div>
//     </div>
// )

function App() {
  return (
    <div className="App">
        <Nav />
        <Front />
        <About />
        <Projects />
        <div className = "footer ">
          Website By Zora Watters
        </div>
    </div>
  );
}

export default App;
