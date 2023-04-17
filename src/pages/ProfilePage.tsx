import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import "../index.css";
import "../assets/css/Sidebar.css"
import "../assets/css/ProfilePage.css"

const ProfilePage = (): JSX.Element => {
    const [firstname, setFirst] = useState<string>("Default");
    function handlefirst(event: React.ChangeEvent<HTMLInputElement>) {
        setFirst(event.currentTarget.value);
    }
    const [lastname, setLast] = useState<string>("Default");
    function handleLast(event: React.ChangeEvent<HTMLInputElement>) {
        setLast(event.currentTarget.value);
    }
    const [PID, setPID] = useState<string>("Default");
    function handlePID(event: React.ChangeEvent<HTMLInputElement>) {
        setPID(event.currentTarget.value);
    }
    const [Phone, setPhone] = useState<string>("Default");
    function handlePhone(event: React.ChangeEvent<HTMLInputElement>) {
        setPhone(event.currentTarget.value);
    }
    const [GPA, setGPA] = useState<string>("Default");
    function handleGPA(event: React.ChangeEvent<HTMLInputElement>) {
        setGPA(event.currentTarget.value);
    }
    const [gender, setGender] = useState<string>("Default");
    function handlegender(event: React.ChangeEvent<HTMLInputElement>) {
        setGender(event.currentTarget.value);
    }
    const [pronouns, setPronoun] = useState<string>("Default");
    function handlePronoun(event: React.ChangeEvent<HTMLInputElement>) {
        setPronoun(event.currentTarget.value);
    }
    const [ethnicity, setEthnicity] = useState<string>("Default");
    function handleEthnicity(event: React.ChangeEvent<HTMLInputElement>) {
        setEthnicity(event.currentTarget.value);
    }
    const [major, setMajor] = useState<string>("Default");
    function handleMajor(event: React.ChangeEvent<HTMLInputElement>) {
        setMajor(event.currentTarget.value);
    }

    const getUser = () => {
        fetch("https://3ae918d3-e290-4f43-9cab-5fd0ae360b30.mock.pstmn.io/api/users/")
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const setUser = () => {
        console.log(updatedData)
        fetch('https://3ae918d3-e290-4f43-9cab-5fd0ae360b30.mock.pstmn.io/api/users/', {
            method: 'PATCH',
            body: JSON.stringify({
                updatedData
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    
    const updatedData = {
        "id": "db8b881e-1ced-404c-a95b-578b1c76773e",
        "pid": PID,
        "email": null,
        "firstName": firstname,
        "lastName": lastname,
        "phone": Phone,
        "resumeUrl": null,
        "gpa": GPA,
        "gender": gender,
        "pronouns": pronouns,
        "ethnicity": ethnicity,
        "major": major
    }
    
    return (
        <div className="profile-container">
            <Sidebar />
            <div className='wrapper'>
                <div className="main-content">
                    <h1 className="content-title">Profile</h1>
                </div>
                <div className='column outset'>

                    <div className='one-column inset'>
                        <h1 className="second-text">Personal</h1>
                        <form>
                            <input type="text" placeholder="First Name" id="FName" className="text-input inset" onChange={handlefirst}/>
                            <input type="text" placeholder="Last name" id="LName" className="text-input inset" onChange={handleLast}/>
                            <input type="text" placeholder="Phone" id="Phone" className="text-input inset" onChange={handlePhone}/>
                            <input type="text" placeholder="Gender" id="Gender" className="text-input inset" onChange={handlegender}/>
                            <input type="text" placeholder="Pronouns" id="Pronouns" className="text-input inset" onChange={handlePronoun}/>
                            <input type="text" placeholder="Ethnicity" id="Ethnicity" className="text-input inset" onChange={handleEthnicity}/>
                        </form>
                    </div>


                    <div className='one-column inset'>
                        <h1 className="second-text">Education</h1>
                        <form>
                            <input type="text" placeholder="Major" id="Major" className="text-input inset" onChange={handleMajor}/>
                            <input type="text" placeholder="Graduating Year" id="Year" className="text-input inset" />
                            <input type="text" placeholder="GPA" id="GPA" className="text-input inset" onChange={handleGPA}/>
                            <input type="text" placeholder="PID" id="PID" className="text-input inset" onChange={handlePID}/>
                        </form>
                    </div>

                    <div className="Save-button">
                        <button className="button" onClick={setUser}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;