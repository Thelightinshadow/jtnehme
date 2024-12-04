import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Web Page</h1>
        <p>
          This is a simple React application that explains how it was set up, developed, and hosted.
        </p>
        <section>
          <h2>Installation and Setup</h2>
          <p>
            I installed React by running <code>npx create-react-app my-react-app</code> and followed the setup instructions provided.
          </p>
          <h2>Challenges Encountered</h2>
          <ul>
            <li>Initial setup issues with dependencies — solved by ensuring all npm packages were up-to-date.</li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
