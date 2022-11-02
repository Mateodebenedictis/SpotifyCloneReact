import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }

  return (
    <form 
        onSubmit={handleSubmit}
        autocomplete="off" 
        className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label
          className="sr-only"
          htmlFor="search-field"
      >
        Search all songs
      </label> 
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
            autoComplete="off"
            className="flex-1 bg-transparent border-none placeholder-gray-400 focus:placeholder-gray-600 focus:outline-none text-white p-4"
            id="search-field"
            name="search-field"
            onChange={ (e) => setSearchTerm(e.target.value) }
            placeholder="Search"
            type="search"
            value={searchTerm}
        />
      </div>
    </form>
  )
};

export default Searchbar;
