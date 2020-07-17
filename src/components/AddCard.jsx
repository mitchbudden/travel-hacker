import React, { Component } from "react";
import { cardRef } from "../firebase";
import { connect } from "react-redux";

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  addCard() {
    const { title } = this.state;
    const { email } = this.props.user;
    cardRef.push({ email, title });
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a Card"
            className="form-control"
            style={{ marginRight: "5px" }}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addCard()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(
  mapStateToProps,
  null
)(AddCard);
