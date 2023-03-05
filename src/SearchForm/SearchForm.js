import {PureComponent} from 'react';
import './SearchForm.css';

export default class SearchForm extends PureComponent {
  state = {
    query: this.props.initialQuery,
  };

  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.searchQuery();
    }
  }

  searchQuery = () => {
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <div className='search-form'>
        <input type='text' placeholder='What do you want to watch?'
          value={this.state.query}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.searchQuery}>Search</button>
      </div>
    )
  }
}
