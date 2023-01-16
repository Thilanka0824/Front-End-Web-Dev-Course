import React from "react";

const ListOfGoals = (props) => {
  return (
    <div>
      {props.allGoals.map((listItem) => {
        return (
          <h3 key={listItem.goal}>
            <span>
              My goal is to {listItem.goal}, by {listItem.by}
            </span>
          </h3>
        );
      })}
    </div>
  );
};

export default ListOfGoals;
