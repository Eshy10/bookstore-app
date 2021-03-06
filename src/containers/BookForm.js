import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100),
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { title, category } = this.state;
    const { createBook } = this.props;
    event.preventDefault();
    if (title && category) {
      createBook(this.state);
    }
    this.setState({
      id: Math.floor(Math.random() * 10),
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form_element">
        <label htmlFor="title">
          <h4 className="form_title">Add new book</h4>
          <input id="title" name="title" value={title} onChange={this.handleChange} className="form_input" />
        </label>
        <label htmlFor="category">
          <select name="category" value={category} onChange={this.handleChange} className="form_category">
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" className="form_button" />
      </form>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});
export default connect(null, mapDispatchToProps)(BookForm);
