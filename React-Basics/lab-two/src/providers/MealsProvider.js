import React from 'react'

const MealsContext = React.createContext(); //setting the MealsContext variable using the createContext function
const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"]

const MealsProvider = ({children}) => {
  const [meals, setMealsList] = React.useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
  //meals state is being wrapped in an object before being passed as the value of the MealsContext.Provider. This is often done to allow multiple values to be passed as the context value.
}

export const useMealsListContext = () => React.useContext(MealsContext)

export default MealsProvider