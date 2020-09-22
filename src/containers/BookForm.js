import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index'

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 10),
      title: '',
      category: ''
    };
  }

  handleChange = event => {
  const { name, value } = event.target
  this.setState({[name]: value})
  }

  handleSubmit = event => {
    const {title, category} = this.state;
    const {createBook} = this.props
    event.preventDefault()
    if (title && category) {
      createBook(this.state)
    }
    this.setState({
      id: Math.floor(Math.random() * 10),
      title: '',
      category: ''
    })
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor="title">
          {' '}
          Title
          <input id="title" name="title" value={this.state.title} onChange = {this.handleChange} />
        </label>
        <br />
        <br />
        <label htmlFor="category">
          Choose a book:
          <br />
          <select name="category" value={this.state.category} onChange = {this.handleChange}>
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

const mapDispatchToProps = dispatch => ({
  createBook: book => {
      dispatch(createBook(book))
  }
});
export default connect(null, mapDispatchToProps)(BookForm);
