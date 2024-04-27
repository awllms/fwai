import React from "react";

import "./PresetItem.css";

export const PresetItem = ({ isloading, id, title, onPresetItemClick }) => {
  const className = `PresetItem ${isloading ? "isloading" : ""}`;
  return (
    <div
      className={className}
      onClick={() => (isloading ? "" : onPresetItemClick(id))}
    >
      <span className="PresetItem-message">{title}</span>
    </div>
  );
};

export default PresetItem;
