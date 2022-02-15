import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsresice = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 2,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsresice);

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsresice)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material} : {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
