import React from "react";
import GoalForm from "../Components/GoalForm";
import ListOfGoals from "../Components/ListOfGoals";

const FormPage = () => {
  const [allGoals, setAllGoals] = React.useState([]);

  const addGoal = (goal) => {
    setAllGoals([...allGoals, goal]);
  };

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
};

export default FormPage;
