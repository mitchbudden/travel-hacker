import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { connect } from "react-redux";
import AddCard from "./AddCard";
import CardList from "./CardList";
import FilteredCardList from "./FilteredCardList";

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{ margin: "5px" }}>
        <h3>Travel Hacker</h3>
        <AddCard />
        <hr />
        <h4>Cards</h4>
        <CardList />
        <hr />
        <h4>Filtered Cards</h4>
        <FilteredCardList />
        <hr />
        <button className="btn btn-danger" onClick={() => this.signOut()}>
          Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  null
)(App);
