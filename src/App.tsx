import React from 'react';
import AppRouter from './AppRouter';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <>
      <AppRouter>
        <Header />
      </AppRouter>
    </>
  );
}

export default App;
