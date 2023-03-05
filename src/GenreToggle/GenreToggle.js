import {useState} from 'react';
import './GenreToggle.css';

export default function GenreToggle(props) {
  const [selectedGenre, setGenre] = useState(props.selectedGenre);

  const selectGenre = (genre) => {
    setGenre(genre);
    props.onSelect(genre);
  }

  const genres = props.genreNames.map((genre) => {
    return <button key={genre}
      className={selectedGenre === genre ? 'active' : ''}
      onClick={() => selectGenre(genre)}>{genre}</button>
  });

  return (
    <div className='genre-toggle'>
      {genres}
    </div>
  );
}
