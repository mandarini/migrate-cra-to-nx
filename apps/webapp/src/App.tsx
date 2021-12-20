import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { UiButton } from '@acme/ui-button';

function App() {
  const learnMore = useCallback(() => {
    window.location.assign('https://reactjs.org');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UiButton onClick={learnMore}>Learn React</UiButton>;
      </header>
    </div>
  );
}

export default App;
