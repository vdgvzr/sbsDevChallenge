import React, { forwardRef } from "react";
import Icons from "/src/assets/svg/icons.svg";
import PropTypes from 'prop-types';

const Icon = forwardRef((props, ref) => (
    <svg 
        className={`icon icon-${props.name} position-${props.position}`} 
        fill={props.fill}
        stroke={props.stroke}
        ref={ref}
        value={props.value}
        style={{
            height: `${props.height}`,
            width: `${props.width}`,
            top: `${props.top}`,
            right: `${props.right}`,
            bottom: `${props.bottom}`,
            left: `${props.left}`,
            transform: `rotate(${props.rotate}deg)`,
            zIndex: `${props.zIndex}`
        }}>
        <use xlinkHref={`${Icons}#icon-${props.name}`} />
    </svg>
));

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
};

export default Icon;