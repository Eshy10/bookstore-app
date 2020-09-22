import React, { Component } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 10) + 1,
      title: '',
      category: ''
    };
  }

  handleChange = event => {
  const { name, value } = event.target
  this.setState({[name]: value})
  }

  render() {
    return (
      <form>
        <label htmlFor="title">
          {' '}
          Title
          <input id="title" name="title" onChange = {this.handleChange} />
        </label>
        <br />
        <br />
        <label htmlFor="books">
          Choose a book:
          <br />
          <select name="books" onChange = {this.handleChange}>
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
}
export default BookForm;
