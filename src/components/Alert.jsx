import React from 'react';

const Alert = (props) => {
    const capitalise=(word)=>{
        return word.charAt(0).toUpperCase()+word.substring(1);
    }
    return (
        props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}</strong>: {props.alert.message}.

        </div>

    )
}

export default Alert;