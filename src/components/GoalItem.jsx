import React, { Component } from "react";
import { filteredCardRef, cardRef } from "../firebase";
import { connect } from "react-redux";

class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    cardRef.child(serverKey).remove();
    filteredCardRef.push({ email, title });
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{ margin: "5px" }}>
        <strong>{title}</strong>
        <span style={{ margin: "5px" }}>
          {" "}
          submitted by <em>{email}</em>
        </span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
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
)(GoalItem);
