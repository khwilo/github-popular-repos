import React from 'react';

import './App.css';

function App() {
  React.useEffect(() => {
    let isCurrent = true;
    fetch('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars')
      .then((res) => res.json())
      .then((data) => {
        if (isCurrent) {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <div>
      <header>
        <h1>app works!</h1>
      </header>
    </div>
  );
}

export default App;
