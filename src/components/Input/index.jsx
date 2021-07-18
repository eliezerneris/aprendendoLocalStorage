import React from 'react';
import './index.css'

const Input = (props) =>{
    return(
        <>
                <span>E-Mail: </span><input type="email" className="form-control email" placeholder="seuemail@email.com.br" onChange={props.onChange} value={props.value}></input>
        </>
    )
}

export default Input;