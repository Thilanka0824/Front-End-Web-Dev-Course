/*
The state object is a way to keep track of the current state of your component, and the actions are a way to change the state in a predictable and consistent way. The reducer function takes in the current state and an action, and returns a new state based on the action.
*/

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "incremented_age":
      return {
        ...state,
        age: state.age + 1,
      };
    case "set_toggle":
      return {
        ...state,
        toggle: !state.toggle,
      };
    case "buy_ingredients":
      return {
        ...state,
        money: state.money + 10,
      };
    case "sell_a_meal":
      return {
        ...state,
        money: state.money - 10,
      };
    case "celebrity_visit":
      return {
        ...state,
        money: state.money + 5000,
      };
    case "set_refetch":
      return {
        ...state,
        refetch: true,
      };
    case "reset_refetch":
      return {
        ...state,
        refetch: false,
      };
    case "set_picture":
      return {
        ...state,
        picture: action.picture,
      };
    /*
     In this case, the action "set_picture" is setting the picture by taking the picture from the action and sets it to the state
     */
    default:
      throw Error("Unknown action.");
  }
}

export default reducer;
