import React, { Component } from "react";
import { cardRef } from "../firebase";
import { connect } from "react-redux";
import { setCards } from "../actions";
import CardItem from "./CardItem";

class CardList extends Component {
  componentDidMount() {
    cardRef.on("value", snap => {
      let cards = [];
      snap.forEach(card => {
        const { email, title } = card.val();
        const serverKey = card.key;
        cards.push({ email, title, serverKey });
      });
      this.props.setCards(cards);
    });
  }

  render() {
    return (
      <div>
        {this.props.cards.map((card, index) => {
          return (
            <CardItem key={index} card={card}>
              {card.title}
            </CardItem>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cards } = state;
  return { cards };
}

export default connect(
  mapStateToProps,
  { setCards }
)(CardList);
