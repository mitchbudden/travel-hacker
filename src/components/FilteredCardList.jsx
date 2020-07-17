import React, { Component } from "react";
import { filteredCardRef } from "../firebase";
import { connect } from "react-redux";
import { setFiltered } from "../actions";

class FilteredCardList extends Component {
  componentDidMount() {
    filteredCardRef.on("value", snap => {
      let filteredCards = [];
      snap.forEach(completeCard => {
        const { email, title } = completeCard.val();
        filteredCards.push({ email, title });
      });
      this.props.setFiltered(filteredCards);
    });
  }

  clearCompleted() {
    filteredCardRef.set([]);
  }

  render() {
    return (
      <div>
        {this.props.filteredCards.map((completeCard, index) => {
          const { title, email } = completeCard;
          return (
            <div key={index}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
          );
        })}
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { filteredCards } = state;
  return { filteredCards };
}

export default connect(
  mapStateToProps,
  { setFiltered }
)(FilteredCardList);
