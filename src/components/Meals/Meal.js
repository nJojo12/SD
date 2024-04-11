import React, { useState, useEffect } from "react";
import {
  Butt,
  Food,
  AddMealsForm,
  FoodInput,
  FoodList,
  FoodP,
  Sub,
} from "./Meal.styles.js";
const Meal = () => {
  const [meals, setMeals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newMeal, setNewMeal] = useState({
    name: "",
    ingredients: "",
    calories: "",
    preparationTime: "",
  });

  useEffect(() => {
    if (isLoaded) {
      // Fetch your data here. For now, I'll use a static array.
      setMeals((prevMeals) => [
        ...prevMeals,
        {
          name: "Meal 1",
          ingredients: "Ingredients 1",
          calories: 200,
          preparationTime: "30 minutes",
        },
        {
          name: "Meal 2",
          ingredients: "Ingredients 2",
          calories: 300,
          preparationTime: "45 minutes",
        },
        // Add more meals here...
      ]);
      // setIsLoaded(false);
    }
  }, [isLoaded, setIsLoaded]);

  const handleRemove = (index) => {
    const newMeals = [...meals];
    newMeals.splice(index, 1);
    setMeals(newMeals);
  };

  const handleLoad = () => {
    if (isLoaded) return;
    setIsLoaded(true);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    setMeals([...meals, newMeal]);
    setNewMeal({
      name: "",
      ingredients: "",
      calories: "",
      preparationTime: "",
    });
    (!isLoaded)&& setIsLoaded(true);
    handleLoad();
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMeal((prevMeal) => ({
      ...prevMeal,
      [name]: name === "preparationTime" ? value + " minutes" : value,
    }));
  };

  return (
    <div>
      <Butt onClick={handleLoad}>Load Meals</Butt>
      <FoodList>
        {meals.map((meal, index) => (
          <Food
            key={index}
            className="meal-card"
            style={{ flex: "0 0 30%", margin: "1em" }}
          >
            <h2>{meal.name}</h2>
            <FoodP>
              <strong>Ingredients:</strong> {meal.ingredients}
            </FoodP>
            <FoodP>
              <strong>Calories:</strong> {meal.calories}
            </FoodP>
            <FoodP>
              <strong>Preparation Time:</strong> {meal.preparationTime}
            </FoodP>
            <Sub className="btn btn-remove" onClick={() => handleRemove(index)}>
              Remove
            </Sub>
          </Food>
        ))}
      </FoodList>
      <AddMealsForm onSubmit={handleAdd}>
        <FoodInput
          name="name"
          value={newMeal.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <FoodInput
          name="ingredients"
          value={newMeal.ingredients}
          onChange={handleInputChange}
          placeholder="Ingredients"
          required
        />
        <FoodInput
          name="calories"
          type="number"
          value={newMeal.calories}
          onChange={handleInputChange}
          placeholder="Calories"
          required
        />
        <FoodInput
          name="preparationTime"
          type=" number"
          value={newMeal.preparationTime.replace(" minutes", "")}
          onChange={handleInputChange}
          placeholder="Preparation Time"
          required
        />
        <Sub type="submit">Add Meal</Sub>
      </AddMealsForm>
    </div>
  );
};

export default Meal;
