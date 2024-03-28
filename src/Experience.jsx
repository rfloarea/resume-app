import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export default function Experience() {
    const [position, setPosition] = useState('');
    const [employer, setEmployer] = useState('');
    const [description, setDescription] = useState('');

    function handlePositionChange(event) {
        setPosition(event.target.value);
    }
    function handleEmployerChange(event) {
        setEmployer(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    return (
        <>
            <div className="editor">
                <h2>Experience</h2>
                <label htmlFor="position">Position</label>
                <input 
                    type="text"
                    id="position"
                    value={position}
                    onChange={handlePositionChange}
                    placeholder="Your position" />
                <label htmlFor="employer">Employer</label>
                <input 
                    type="text"
                    id="employer"
                    value={employer}
                    onChange={handleEmployerChange}
                    placeholder="Your employer" />
                <label htmlFor="description"></label>
                <textarea 
                    name="description" 
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange} 
                    cols="30" 
                    rows="10"
                    placeholder="Create new bullet points with 'shift + enter'"></textarea>
            </div>

            <div className="display">
                <h3>{position}</h3>
                <p>{employer}</p>
                <ul>
                    {description.split('\n').map(line => 
                        <li key={uuidv4()}>{line}</li>)}
                </ul>
            </div>
        
        </>
    )
}