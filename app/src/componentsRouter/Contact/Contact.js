import React, { Component, Fragment } from 'react';

const products = [
  {
    id: 1,
    name: 'Tv 55"',
    category: 'Rtv'
  }, {
    id: 2,
    name: 'Tv 65"',
    category: 'Rtv'
  }, {
    id: 3,
    name: 'Dishwasher',
    category: 'Agd'
  }, {
    id: 4,
    name: 'Washing machine',
    category: 'Agd'
  }, {
    id: 5,
    name: 'Red dead redemption',
    category: 'Ps4'
  }
]

const categories = products.reduce((acc, product) => {
  if (!acc.includes(product.category)) {
    acc.push(product.category);
  }
  return acc;
}, []);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      category: 'Rtv',
      sortAsc: true,
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  handleSort = () => {
    this.setState((prevState) => ({
      sortAsc: !prevState.sortAsc,
    }))
  }

  render() {
    const { search, category, sortAsc } = this.state;

    return (
      <Fragment>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={search} onChange={this.handleChange} name="search" type="text" />

          <select value={category} onChange={this.handleChange} name="sex">
            {categories.map((category) => <option value={category} key={category}>{category}</option>)}
          </select>
          <button type="submit">Send</button>
        </form>
        <div onClick={this.handleSort}>sorting asc: {sortAsc.toString()}</div>
        <div>
          {
            products
              .filter(({ name }) => {
                const { search } = this.state;
                return name.toLowerCase().includes(search.toLowerCase()) || !search;
              })
              .sort(({ name: nameA }, { name: nameB }) => {
                return sortAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
              })
              .map(({ name, category }) => <div key={name}>{`${name}, ${category}`}</div>)
          }
        </div>
      </Fragment>
    )
  }
}

export default Contact;
