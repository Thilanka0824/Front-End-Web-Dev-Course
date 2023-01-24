import React from "react";
import reducer from "../Hooks/reducer";

const FetchUser = () => {
  const [user, setUser] = React.useState([]);
  //   const [refetch, setRefetch] = React.useState(false)
  const [state, dispatch] = React.useReducer(reducer, { refetch: false }); //this is where it lives for this page

  const fetchData = async () => {
    const result = await fetch("https://randomuser.me/api/?results=1");
    const fetchedUsers = await result.json();
    setUser(fetchedUsers);
    console.log(fetchedUsers); //check the log for the object
    dispatch({ type: "reset_refetch" }); //resetting it to false after the button sets it to true
  };

  React.useEffect(() => {
    fetchData();
    // setRefetch(true)
  }, [state.refetch]);

  const clickHandler = () => {
    dispatch({ type: "set_refetch" }); // in the button, sets it to true, changing the value and activating the dependency array of the useEffect
  };

  return Object.keys(user).length > 0 ? (
    <div
      style={{
        border: "2px solid black",
        margin: "100px",
        padding: "20px",
        maxWidth: "700px",
      }}
    >
      <h1>Random User</h1>
      <img src={user.results[0].picture.large} alt="" />
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
      <h3>Age: {user.results[0].dob.age}</h3>
      <button onClick={clickHandler}>refresh</button>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
};

export default FetchUser;
