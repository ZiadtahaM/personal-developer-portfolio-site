import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Developer Portfolio</h1>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Restaurant API</li>
          <li>Portfolio Site</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default App;
