import React from "react";

const Card = ({ icon, color, title, desc }) => {
  return (
    <div className="card">
      <div style={{ background: color }}>
        <img src={icon} alt="icon" />
      </div>

      <h3>{title}</h3>

      <p>{desc}</p>
    </div>
  );
};

export default Card;
