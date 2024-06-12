import React from "react";
import desktopDivider from "../assets/images/pattern-divider-desktop.svg";
import mobileDivider from "../assets/images/pattern-divider-mobile.svg";

const Divider = () => {
  return (
    <div className="pb-16">
      <picture>
        <source media="(max-width: 375px)" srcSet={mobileDivider} />
        <img src={desktopDivider} alt="pattern divider" />
      </picture>
    </div>
  );
};

export default Divider;
