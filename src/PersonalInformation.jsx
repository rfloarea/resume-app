import { useState } from 'react';

export const PersonalInformation = () => {
  // Define shared state and update functions
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
        <h2>Personal Information</h2>
        <FirstName firstName={firstName} setFirstName={setFirstName} />
        <LastName lastName={lastName} setLastName={setLastName} />
        <Email email={email} setEmail={setEmail} />
    </div>
  );
};

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

const LastName = ({ lastName, setLastName }) => {
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
        <label>First Name Input</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
        <p>Last Name Display: {lastName}</p>
    </div>
  );
};

const Email = ({ email, setEmail }) => {
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <label htmlFor="">Email Input</label>
            <input type="text" value={email} onChange={handleEmailChange} placeholder='Email' />
            <p>Email Display: {email} </p>
        </div>
    )
}
