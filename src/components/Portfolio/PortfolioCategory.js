import React from "react";

const PortfolioCategory = ({ title, active, setActiveCategory, id }) => {
  return (
      <li
          className={active ? "active" : ""}
          onClick={() => setActiveCategory(id)}
      >
        {title}
      </li>
  );
};

export default PortfolioCategory;
