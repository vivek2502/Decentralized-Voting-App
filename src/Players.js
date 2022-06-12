import React from "react";

const Players = (props) => {
  return (
    <div className="item">
      <div>
        <img
          className="ui medium circular image"
          src={props.imageUrl}
          alt={props.name}
        />
      </div>

      <div className="middle aligned content">
        <div className="description">
          <a>
            <i
              onClick={props.votePlayer.bind(this, props.id)}
              className="large caret up icon"
            />
            {props.votes}
          </a>
          <p>{props.name}</p>
        </div>
        <div className="extra">
          <span className="club">Party:</span>
          <img
            src={props.clubUrl}
            className="ui avatar image"
            alt={props.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Players;
