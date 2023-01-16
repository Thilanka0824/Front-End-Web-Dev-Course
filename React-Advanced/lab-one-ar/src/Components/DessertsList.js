import React from "react";

const DessertsList = ({ datas }) => {
  console.log(datas);
  const filteredData = datas
    .filter((data) => data.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => {
      const itemText = `${dessert.name} - ${dessert.calories} cal`;
      return <li>{itemText}</li>;
    });
  console.log(filteredData);

  // const listItems = datas.map((dessert) => {
  //   const itemText = `${dessert.name} - ${dessert.calories} cal`
  //   return <li>{itemText}</li>
  // })

  return (
    <div>
      <ul>{filteredData}</ul>
    </div>
  );
};

export default DessertsList;

/*

.filter()
the function passed to filter() takes in an object data and it returns true or false, depending on whether the data's calories are less than 500 or not. So the array filteredData will have only the elements that pass this condition.

.sort()
The function passed to sort() takes in two arguments a and b, these are two elements that the sort method is comparing. The function should return a negative, zero, or positive value, depending on the elements' sort order. In this case, to sort in ascending order by calories, it subtracts the calories of a from b. If the result is negative, it means b is greater than a, so a should come first in the sorted array. If the result is positive, it means a is greater than b, so b should come first in the sorted array.

Additionally, you can also sort in descending order, by replacing .sort((a, b) => a.calories - b.calories) with .sort((a, b) => b.calories - a.calories)

It's important to note that the sort() method modifies the original array, so if you want to maintain the original one, you need to create a new one with the sorted elements, by using the slice() method or the spread operator

*/
