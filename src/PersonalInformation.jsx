import { useState } from 'react';

// Common Parent Component
export const PersonalInformation = () => {
  // Define shared state and update functions
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
        <h2>Personal Information</h2>
        <FirstName firstName={firstName} setFirstName={setFirstName} />
        <LastName lastName={lastName} setLastName={setLastName} />
    </div>
  );
};

// Component A: Input for First Name
const FirstName = ({ firstName, setFirstName }) => {
  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <div>
        <label>First Name Input</label>
        <input type="text" value={firstName} onChange={handleChange} placeholder="First Name" />
        <p>First Name Display: {firstName}</p>
    </div>
  );
};

// Component B: Display First Name and Input for Last Name
const LastName = ({ lastName, setLastName }) => {
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
        <label>First Name Input</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
        <p>Last Name Display {lastName}</p>
    </div>
  );
};
