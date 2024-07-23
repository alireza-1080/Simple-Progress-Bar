import "./ToolTip.css";
import React from 'react'

function ToolTip({ progress }) {
    return (
        <div className="tool-tip-container">
            {progress}%
            <div className="tool-tip-feature"></div>
        </div>
    )
}

export default ToolTip