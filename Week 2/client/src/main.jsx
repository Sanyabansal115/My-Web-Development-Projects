import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IngredientsList from "./App.jsx";
const root = createRoot(document.getElementById("root"));
const items = [
"1 cup unsalted butter",
"1 cup crunchy peanut butter",
"1 cup brown sugar",
"1 cup white sugar",
"2 eggs",
"2.5 cups all purpose flour",
"1 teaspoon baking powder",
"0.5 teaspoon salt",
];
root.render(
<StrictMode>
<IngredientsList items={items} />
</StrictMode>
);