import React, { Component } from "react";
import Result from "./components/result";
import "./css/search.css";

class Search extends Component {
  state = { value: "", showResult: false, filtered: [] };

  clearSearch = e => {
    this.setState({
      value: "",
      filtered: []
    });
    if (e) {
      e.preventDefault();
    }
  };

  reRender = () => {
    if (this.state.value.length > 2 && this.state.filtered.length === 0) {
      return <div>Can not found a item</div>;
    }
  };

  render() {
    return (
      <>
        <div className="w-a m-1">
          <input
            className="main-search"
            type="text"
            placeholder="Search for item"
            onChange={e => this.handleChange(e)}
            value={this.state.value}
          />
          {this.reRender()}
          {this.state.showResult ? (
            <Result
              items={this.state.filtered}
              clearSearch={this.clearSearch}
            />
          ) : null}
        </div>
      </>
    );
  }

  handleChange = e => {
    // Hold the original list
    let currentList = [];

    // Hold new filted list before putting into state
    let newList = [];

    if (e.target.value.length > 2) {
      this.setState({ showResult: true });
    } else {
      this.setState({ showResult: false });
    }

    // If search bar isn't empty
    if (e.target.value.length >= 2) {
      // assign original list to currentList
      currentList = this.props.items;

      // use .filter() to show which items should be displayed based on search
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.name.toLowerCase();
        // change search to lowercase
        const filter = e.target.value.toLowerCase();

        // check to see if the current list item inculdes the search term
        // return lc.includes(filter);
        return lc.includes(filter);
      });
    } else {
      newList = [];
    }
    this.setState({
      filtered: newList,
      value: e.target.value
    });
  };
}

export default Search;
