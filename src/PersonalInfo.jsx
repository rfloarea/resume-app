import { useState } from "react"

export default function PersonalInfo() {
    const [submit, setSubmit] = useState('submit');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [linkedIn, setLinkedIn] = useState('');

    function handleClick() {
        if (submit == 'submit') {
            setSubmit('submitted!')
        } else {
            setSubmit('submit')
        }
    }

    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handleLinkedInChange(event) {
        setLinkedIn(event.target.value)
    }
    return (
        <>
            <div className="editor">
                <h2>Personal Info</h2>
                <input 
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Your name" />
                <input 
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email" />
                <input 
                    type="text"
                    value={linkedIn}
                    onChange={handleLinkedInChange}
                    placeholder="Your LinkedIn URL" />

                <button onClick={handleClick}>{submit}</button>
            </div>
        

            <div className="display">
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{linkedIn}</p>
            </div>
        </>
    )
}