// Icon.jsx
import React from 'react';

const Icon = ({ type, size }) => {
    const style = {
        width: `${size}px`,
        height: `${size}px`,
        verticalAlign: '-0.15em',
        fill: 'currentColor',
        overflow: 'hidden'
    };

    return (
        <svg className="icon" style={style} aria-hidden="true">
            <use xlinkHref={`#${type}`}></use>
        </svg>
    );
};

export default Icon;