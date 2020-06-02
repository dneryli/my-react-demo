import React from 'react';
import PersonB from './PersonB';
import PersonC from './PersonC';
import PersonD from './PersonD';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <PersonB />
//     </div> 
//   );
// }

const App = (props) => { 
  return(
    <div className="App">
      <PersonB />
      <PersonD />
    </div>
  )
}

// const App = () => (
//   <div className="App">
//     <PersonB />
//   </div>
// )
export default App;
