import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

import { ImSphere } from 'react-icons/im';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      toast.warning('Enter data in the search field!');
      return;
    }

    this.props.onSubmit(this.state.value.trim().toLowerCase());

    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <label>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <ImSphere />
            </SearchFormButton>

            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleInputChange}
              value={this.state.value}
            />
          </SearchForm>
        </label>
      </Header>
    );
  }
}
