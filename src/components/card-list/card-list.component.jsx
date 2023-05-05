import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render from cardList");
    console.log(this.props.monsters);
    const { monsters } = this.props; //destructure

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
