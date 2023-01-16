import React, { useState } from "react";
import UseEffectExplainer from "../Components/UseEffectExplainer";

const GiftCardPage = () => {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  /*
  -Inside the setGiftCard() function invocation's parentheses, you passed in an arrow function.
    This arrow function has a single parameter, named prevState. After the arrow, you added a block of code.
  -Next, you returned a copy of the prevState object using the rest operator.
  -Next, you combined this copy of the prevState object with those properties that you wanted updated, by updating some of 
    the key-value pairs that already exist on the state object that were initially passed to the useState() function call.
  -Finally, you updated the remaining properties on the state object.
    You updated the valid key's value to false.
    Then, updated the instructions key's value to Please visit our restaurant to renew your gift card.
  */
  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card",
      };
    });
  }

  return (
    <div>
    <div
      style={{
        color: "whitesmoke",
        padding: "40px",
        margin: "100px 260px",
        backgroundColor: "navy",
        borderRadius: "20px",
      }}
    >
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button
          style={{
            color: "black",
            padding: "20px",
            margin: "10px",
            backgroundColor: "yellow",
            borderRadius: "12px",
            boxShadow: "box-shadow: 10px 50px 5px yellow",
          }}
          onClick={spendGiftCard}
        >
          Spend Gift Card
        </button>
      )}
    </div>

    <div>
        <UseEffectExplainer />
    </div>

    </div>
  );
};

export default GiftCardPage;
