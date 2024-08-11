import React, { useState } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar">
        <input
            type="text"
    placeholder="Search cars..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
        </div>
);
};

export default SearchBar;
