import React from "react";

const Quote = ({ advice }) => {
  return (
    <div className="px-6 ">
      <p className="text-[28px] text-primaryLightCyan text-center font-semibold py-8">
        "{advice}"
      </p>
    </div>
  );
};

export default Quote;
