import React from 'react';

const Button = (props) =>{
    return(
        <span><button type="button" className={props.className} onClick={props.onClick}>{props.children}</button> </span>
    )
}

export default Button;