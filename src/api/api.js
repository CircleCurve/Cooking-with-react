const addRecipe = async (recipe) => {
  const rawResponse = await fetch(`http://localhost:3001/recipes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  return rawResponse;
};

const updateRecipe = async (recipe) => {
  const rawResponse = await fetch(
    `http://localhost:3001/recipes/${recipe._id}`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    }
  );

  return rawResponse;
};

export const getApiRequest = (requestType) => {
  const request = {
    addRecipe,
    updateRecipe,
  };

  return request[requestType] ?? "";
};
