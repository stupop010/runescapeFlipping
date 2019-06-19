import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItemLog } from "../actions";

class ItemBuy extends Component {
  componentDidMount() {
    this.props.fetchItemLog();
  }

  renderItem = items => {
    return items.map(item => {
      return (
        <div class="card">
          <div class="card-body">
            This is some text within a card body.
            <p />
          </div>
        </div>
      );
    });
  };

  render() {
    const items = this.props.itemLog;
    return <div>{items ? this.renderItem(items) : "Loding"}</div>;
  }
}

function mapStateToProps({ itemLog }) {
  return { itemLog };
}

export default connect(
  mapStateToProps,
  { fetchItemLog }
)(ItemBuy);
