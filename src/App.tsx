import React from 'react';
import { useQuery } from '@tanstack/react-query'
import './App.css';

interface Person {
  name: string;
}

function App() {
  const [searchInput, updateSearchInput] = React.useState('');
  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    updateSearchInput(e.currentTarget.value);
  };

  const {isLoading, data} = useQuery(['search', searchInput],
      async () => {
        if (searchInput && searchInput !== '') {
          const response = await fetch(`https://swapi.dev/api/people?search=${searchInput}`, {method: 'POST'});
          return response.json();
        }
        return {}
      })
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={onSearch} value={searchInput} aria-label="Search people input"/>
        {!isLoading &&
          <ul>
            {data.results?.map?.((person: Person) => {
                return <li key={person.name}>{person.name}</li>
              })
            }
          </ul>
        }
      </header>
    </div>
  );
}

export default App;
