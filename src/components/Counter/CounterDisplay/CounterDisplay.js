import React from 'react';
import classes from './CounterDisplay.module.css';

function CounterDisplay(props) {
    return (
        <div className={classes.CounterDisplay}>
            Current Counter: {props.value}
        </div>
    )
}

export default CounterDisplay;
