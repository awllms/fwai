import React from 'react';

import { PresetItem } from '../PresetItem/PresetItem';

import './Presets.css';


export const Presets = ({ isloading, presets, onPresetItemClick }) => {
    return (
        <div className="Presets">
            <h3>Presets</h3>
            <span className="Presets-message">Suggestions to get the gears in motion.</span>
            <div className="Preset">
                <PresetItem isloading={isloading} id="1" title={presets[1][0]} onPresetItemClick={onPresetItemClick} />
                <PresetItem isloading={isloading} id="2" title={presets[2]} onPresetItemClick={onPresetItemClick}  />
                <PresetItem isloading={isloading} id="3" title={presets[3][0]} onPresetItemClick={onPresetItemClick}  />
            </div>
        </div>
    );
};

export default Presets;