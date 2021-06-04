import React, { useState } from 'react';
import Input from '../Input/Input';
import Keypad from '../Keypad/Keypad';
import { romanToDecimalConvert } from '../../converter/romanToDecimal';
import { decimalToRomanConverter } from '../../converter/decimalToRoman';

const Display = (props) => {

    const [romanInput, setRomanInput] = useState('');
    const [decimalInput, setDecimalInput] = useState('');

    const romanToDecimalConverter = () => {
        
        setDecimalInput(romanToDecimalConvert(romanInput));
    };

    const romanKeyPressHandler = (key) => {
        setRomanInput(romanInput.concat(key));
        const roman = romanInput.concat(key);
        setDecimalInput(romanToDecimalConvert(roman));
    };

    const decimalChangeHandler = (event) => {
        setDecimalInput(event.target.value);
        setRomanInput(decimalToRomanConverter(event.target.value));
    };

    const backHandler = () => {
        const roman = romanInput.slice(0,-1);
        setRomanInput(roman);
        setDecimalInput(romanToDecimalConvert(roman));
    };
 
    return (
        <div className="container p-5">
            <div className="d-flex flex-row col">
                <div className="col-6 m-1 border border-secondary rounded p-3">
                    <p className="h6">Roman</p>
                    <Input romanInput={romanInput} submitHandler={(Roman) => romanToDecimalConverter(Roman)} />
                    <Keypad click={(key) => romanKeyPressHandler(key)} />
                    <button className="btn btn-dark" onClick={backHandler}>BACK</button>
                </div>
                <div className="col-6 m-1 border border-secondary rounded p-3">
                    <p className="h6">Decimal</p>
                    <input className="form-control" value={decimalInput} onChange={decimalChangeHandler} />
                </div>
            </div>
        </div>
    );

};

export default Display;