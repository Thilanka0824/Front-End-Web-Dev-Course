import React from 'react'

const FetchUserDotThen = () => {
    const [user, setUser] = React.useState([]);
    const [refetch, setRefetch] = React.useState(false)

  const fetchData = () => {
    
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
    .then((data)=>{setUser(data)})
};

React.useEffect(() => {
    fetchData();
    // console.log(user)
    setRefetch(true)
  }, [refetch]);

  return Object.keys(user).length > 0 ? (
    <div
      style={{
        border: "2px solid black",
        margin: "100px",
        padding: "20px",
        maxWidth: "700px",
      }}
    >
      <h1>Customer data</h1>
      <img src={user.results[0].picture.large} alt="" id="profile-pic" />
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
      <h2>Age: {user.results[0].dob.age}</h2>
      <button
        onClick={() => {
          setRefetch(false);
        }}
      >
        Refresh
      </button>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}


export default FetchUserDotThen