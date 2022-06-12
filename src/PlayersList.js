import React from "react";
import PlayerDetails from "./PlayerDetails";
import Players from "./Players";

class Component extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    this.setState({
      players: PlayerDetails
    });
  }

  voteHandler = playerId => {
    const votePlayer = this.state.players.map(footballer => {
      if (playerId === footballer.id) {
        return Object.assign({}, footballer, {
          votes: footballer.votes + 1
        });
      } else {
        return footballer;
      }
    });

    this.setState({
      players: votePlayer
    });
  };
  render() {
    //sort players with highest votes

    let sortPlayers = this.state.players.sort((a, b) => {
      return b.votes - a.votes;
    });
    const players = sortPlayers.map(player => (
      <Players
        key={player.id}
        id={player.id}
        name={player.name}
        votes={player.votes}
        imageUrl={player.imageUrl}
        clubUrl={player.clubUrl}
        votePlayer={this.voteHandler}
      />
    ));
    return <div className="ui divided unstackable items main">{players}</div>;
  }
}

export default Component;
