function Bag(props) {
  const bag = {
    padding: "20px",
    border: "10px solid gray",
    background: "#fff",
    margin: "20px 20px",
  };
  return <div style={bag}>{props.children}</div>;
}
export default Bag;
