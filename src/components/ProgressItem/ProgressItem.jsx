import ToolTip from "../ToolTip/ToolTip";
import "./ProgressItem.css";
import React from 'react';

function ProgressItem({ title, progress }) {
    return (
        <div className="progress-item-container">
            <div className="title-container">
                <p>{title}</p>
            </div>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{width: `${progress}%`}}>
                    <div className="tool-tip-box" >
                        <ToolTip progress={progress}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressItem