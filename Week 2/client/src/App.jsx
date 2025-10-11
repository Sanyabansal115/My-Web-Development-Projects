import React from "react";
import "./App.css";
function IngredientsList({ items }) {
return React.createElement(
"ul",
{ className: "ingredients" },
items.map((ingredient, i) =>
React.createElement("li", { key: i }, ingredient)
)
);
}
export default IngredientsList;