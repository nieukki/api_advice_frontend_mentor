import React from "react";
import iconDice from "../assets/images/icon-dice.svg";

const DrawQuoteButton = ({ onClick }) => {
  return (
    <button
      className="bg-primaryNeonGreen p-5 rounded-[100%] absolute -bottom-8 hover:shadow-buttonShadow transition-all hover:ease-in-out hover:duration-300"
      type="button"
      onClick={onClick}
    >
      <img src={iconDice} alt="dice" />
    </button>
  );
};

export default DrawQuoteButton;
