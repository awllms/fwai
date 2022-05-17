import React from 'react';

import './PresetItem.css';

export const PresetItem = ({ id, title, onPresetItemClick }) => {
    return (
        <div className="PresetItem" onClick={() => onPresetItemClick(id)}>
            <span className="PresetItem-message">{title}</span>
        </div>
    );
};

export default PresetItem;