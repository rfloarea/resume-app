import React, { useState } from "react";

export const PersonalInformation = () => {
    const [sharedValue, setSharedValue] = useState('');

    const handleValueChange = (newValue) => {
        setSharedValue(newValue);
    }

    return (
        <div>
            <Form onChange={handleValueChange}/>
            <Preview value={sharedValue}/>
        </div>
    )
}

const Form = ({onChange}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);
    }
    return (
        <div>
            <h2>Personal Information</h2>
            <input 
                type="text" 
                value={value} 
                onChange={handleChange}
                placeholder="Your name"></input>
        </div>
    )
}

const Preview = ({value}) => {
    return (
        <div>
            <h2>Personal Info Preview</h2>
            <p>Name: {value}</p>
        </div>
    )
}

