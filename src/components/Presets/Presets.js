import React from 'react';

import { PresetItem } from '../PresetItem/PresetItem';

import './Presets.css';


export const Presets = ({ presets, onPresetItemClick }) => {
    return (
        <div className="Presets">
            <h3>Presets</h3>
            <span className="Presets-message">Suggestions to get the gears in motion.</span>
            <div className="Preset">
                <PresetItem id="1" title={presets[1][0]} onPresetItemClick={onPresetItemClick} />
                <PresetItem id="2" title={presets[2]} onPresetItemClick={onPresetItemClick}  />
                <PresetItem id="3" title={presets[3]} onPresetItemClick={onPresetItemClick}  />
            </div>
        </div>
    );
};

export default Presets;