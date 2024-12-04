import React from 'react';
import './App.css';

function App() {
  return (
      <div class="App">
          <header class="App-header">
              <h1>Welcome to My React Web Page</h1>
              <p>This is a simple React application that explains how it was set up, developed, and hosted.</p>
              <section>
                  <h2>Installation and Setup</h2>
                  <p>I installed React by running <code>npx create-react-app my-react-app</code> and followed the setup instructions provided.</p>
                  <h2>Challenge 1: Understanding React's component-based architecture was initially confusing.</h2>
                  <ul>
                      <li class="solution">Solution: I read the React official documentation and built simple components to get hands-on experience.</li>
                  </ul>
                  <h2>Challenge 2: Integrating CSS for custom styling was tricky at first.</h2>
                  <ul>
                      <li class="solution">Solution: I learned how to use CSS in a React environment by following tutorials and using inline styles where needed for quick adjustments.</li>
                  </ul>
                  <h2>Challenge 3: Deploying the app to a live server was more complicated than I anticipated.</h2>
                  <ul>
                      <li class="solution">Solution: I referred to Vercel’s deployment guide and followed step-by-step instructions to deploy successfully.</li>
                  </ul>
              </section>
          </header>
      </div>
  );
}

export default App;
