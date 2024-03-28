import { useState } from "react"

export default function Education() {
    const [degree, setDegree] = useState('');
    const [school, setSchool] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');

    function handleDegreeChange(event) {
        setDegree(event.target.value)
    }
    function handleSchoolChange(event) {
        setSchool(event.target.value)
    }
    function handleStartYearChange(event) {
        setStartYear(event.target.value)
    }
    function handleEndYearChange(event) {
        setEndYear(event.target.value)
    }
    return (
        <>
            <div className="editor">
                <h2>Education</h2>
                <label htmlFor="degree">Degree</label>
                <input 
                    type="text"
                    id="degree"
                    value={degree}
                    onChange={handleDegreeChange}
                    placeholder="Name of your degree" />
                <label htmlFor="school">School</label>
                <input 
                    type="text"
                    id="school"
                    value={school}
                    onChange={handleSchoolChange}
                    placeholder="Name of your school" />
                <label htmlFor="startYear">Start Year</label>
                <input 
                    type="text"
                    id="startYear"
                    value={startYear}
                    onChange={handleStartYearChange}
                    placeholder="YYYY" />
                <label htmlFor="endYear">End Year</label>
                <input 
                    type="text"
                    id="endYear"
                    value={endYear}
                    onChange={handleEndYearChange}
                    placeholder="YYYY" />
            </div>

            <div className="display">
                <h3>{degree}</h3>
                <p>{school}</p>
                <p>{startYear + ' - ' + endYear}</p>
            </div>
            
        </>
    )
}