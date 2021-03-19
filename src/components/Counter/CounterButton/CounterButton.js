import classes from './CounterButton.module.css';
import React from 'react';

function CounterButton(props) {
    return (
        <div className={classes.CounterButton} onClick={props.clicked}>
            {props.label}
        </div>
    )
}

export default CounterButton;
