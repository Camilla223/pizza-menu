import React from "react";
import Pizza from "./Pizza";

function Menu(props) {
  let pizzaslist = props.pizzas;
  const numPizzas = pizzaslist.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stove oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaslist.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later</p>
      )}
    </div>
  );
}

export default Menu;
