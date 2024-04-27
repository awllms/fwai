import React from "react";

import "./SelectBox.css";

export const SelectBox = ({ value, onSelectBoxChange }) => {
  return (
    <div className="SelectBox">
      <h4>Engine:</h4>
      <select value={value} onChange={onSelectBoxChange}>
        <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
        <option value="gpt-4">gpt-4</option>
        <option value="gpt-4-turbo">gpt-4-turbo</option>
      </select>
    </div>
  );
};

export default SelectBox;
