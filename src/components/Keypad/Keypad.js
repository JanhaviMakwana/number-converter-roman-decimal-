import React from 'react';
import Key from '../Key/Key';

const Keypad = (props) => {
    return (
        <div>
            <Key click={props.click}>I</Key>
            <Key click={props.click}>V</Key>
            <Key click={props.click}>X</Key>
            <Key click={props.click}>L</Key>
            <Key click={props.click}>C</Key>
            <Key click={props.click}>D</Key>
            <Key click={props.click}>M</Key>
        </div>
    );
};

export default Keypad;