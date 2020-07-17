import React, { Component } from "react";
import { filteredCardRef, cardRef } from "../firebase";
import { connect } from "react-redux";

class CardItem extends Component {
  completeCard() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.card;
    cardRef.child(serverKey).remove();
    filteredCardRef.push({ email, title });
  }

  render() {
    const { email, title } = this.props.card;
    return (
      <div style={{ margin: "5px" }}>
        <strong>{title}</strong>
        <span style={{ margin: "5px" }}>
          {" "}
          submitted by <em>{email}</em>
        </span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeCard()}
        >
          Complete
        </button>
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
)(CardItem);
