import React from "react";

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come vist us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
