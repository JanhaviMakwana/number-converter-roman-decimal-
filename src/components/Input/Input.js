import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input
                className="form-control"
                value={props.romanInput}
                onChange={() => { }}
            />
        </div>
    );
};

export default Input;