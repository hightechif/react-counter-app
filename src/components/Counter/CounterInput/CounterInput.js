import React from 'react';
import "./CounterInput.css";

function CounterInput(props) {
    return (
        <div>
            <input 
                className="CounterInput"
                type="number"
                onChange={props.changed}
                placeholder="Masukkan angka"
            />
        </div>
    )
}

export default CounterInput;