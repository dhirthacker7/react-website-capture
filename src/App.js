import React from 'react';
// Global style
import GlobalStyle from './components/GlobalStyle';
// Pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
