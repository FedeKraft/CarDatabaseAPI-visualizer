import React from 'react';
import './App.css';
import CarList from './components/CarList';
import SearchBar from './components/SearchBar';

function App() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <CarList />
      </div>
  );
}

export default App;
