import React, { useState } from 'react';

import kazakhstanFlagUrl from 'C:\Users\ugvey\project2\React-Car-Rental-Website\my-app\src\images\flag.jpg'

function App() {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed((prevIsRed) => !prevIsRed);
  };

  return (
    <div className="App">
      <header className={`App-header ${isRed ? 'red-text' : 'blue-text'}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={kazakhstanFlagUrl} className="Flag" alt="flag" />
        <p>
          <span onClick={handleClick}>Qazaqstan</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
