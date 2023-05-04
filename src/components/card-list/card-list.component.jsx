import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render from cardList");
    console.log(this.props.monsters);
    const { monsters } = this.props; //destructure

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
