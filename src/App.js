import './App.css';
import Counter from './Counter/Counter';
import SearchForm from './SearchForm/SearchForm';
import GenreToggle from './GenreToggle/GenreToggle';

function App() {
  return (
    <div className='App'>
      <Counter initialCount={0} />
      <SearchForm initialQuery={''}
        onSearch={(value) => console.log('onSearch: ', value)}
      />
      <GenreToggle
        genreNames={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
        selectedGenre='All'
        onSelect={(genre) => console.log('onGenreSelect: ', genre)}
      />
    </div>
  );
}

export default App;
