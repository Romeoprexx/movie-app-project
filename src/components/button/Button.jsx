import React from 'react';
import PropTypes from 'prop-types';


import './button.scss';

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
            disabled
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
            
        >
            {props.children}
        </Button>
    );
}


export const FavButton = props => {
    return(
        <button className={`btn1 ${props.className}`}
        
        onClick={props.onClick ? () => props.onClick() : null}
        
        >
         
         {props.children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;
