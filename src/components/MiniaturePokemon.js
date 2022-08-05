import React from "react";
import { Link } from "react-router-dom";

const MiniaturePokemon = ({ id, name, image, type }) => {
  return (
    <div className="miniature-pokemon">
      <div className="number">
        <small>#{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail">
        <h2>{name}</h2>
        <small>Type: {type}</small>
      </div>
      <div>
        <button className="btn-load-more">
          <Link to={`/statistique/` + id}> Clique pour plus d'info</Link>
        </button>
      </div>
    </div>
  );
};

export default MiniaturePokemon;
