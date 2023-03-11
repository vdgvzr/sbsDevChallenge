import React from "react";
import Icons from "/src/assets/svg/icons.svg";
import PropTypes from 'prop-types';

const Icon = ({ name, color, width, height }) => (
    <svg className={`icon icon-${name}`} fill={color} width={width} height={height}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
};

export default Icon;