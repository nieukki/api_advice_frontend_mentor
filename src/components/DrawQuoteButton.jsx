import React from "react";
import iconDice from "../assets/images/icon-dice.svg";

const DrawQuoteButton = ({ fetchAdvicesData }) => {
  return (
    <button
      className="bg-primaryNeonGreen p-5 rounded-[100%] absolute -bottom-8 hover:shadow-buttonShadow transition-all hover:ease-in-out hover:duration-300"
      onClick={fetchAdvicesData}
    >
      <img src={iconDice} alt="dice"></img>
    </button>
  );
};

export default DrawQuoteButton;
