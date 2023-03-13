import React from "react";
import Icons from "/src/assets/svg/icons.svg";
import PropTypes from 'prop-types';

const Icon = ({ name, stroke, fill, width, height, position, top, right, bottom, left, rotate, zIndex }) => (
    <svg 
        className={`icon icon-${name} position-${position}`} 
        fill={fill}
        stroke={stroke}
        style={{
            height: `${height}`,
            width: `${width}`,
            top: `${top}`,
            right: `${right}`,
            bottom: `${bottom}`,
            left: `${left}`,
            transform: `rotate(${rotate}deg)`,
            zIndex: `${zIndex}`
        }}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
};

export default Icon;