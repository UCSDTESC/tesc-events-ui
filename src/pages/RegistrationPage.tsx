import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import "../index.css";
import "../assets/css/Sidebar.css"
import "../assets/css/RegistrationPage.css"

const RegistrationPage = (): JSX.Element => {
    const [firstname, setFirst] = useState<string>("Default");
    function handlefirst(event: React.ChangeEvent<HTMLInputElement>) {
        setFirst(event.currentTarget.value);
    }
    const [lastname, setLast] = useState<string>("Default");
    function handleLast(event: React.ChangeEvent<HTMLInputElement>) {
        setLast(event.currentTarget.value);
    }
    const [Email, setEmail] = useState<string>("Default");
    function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.currentTarget.value);
    }
    const [Password, setPassword] = useState<string>("Default");
    function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }
    const [Confirm, setConfirm] = useState<string>("Default");
    function handleConfirm(event: React.ChangeEvent<HTMLInputElement>) {
        setConfirm(event.currentTarget.value);
    }

    const saveHandler = () => {
        console.log(updatedData)
        if (Password !== Confirm) {
            alert("Passwords don't match");
          }
        else{
            fetch('https://3ae918d3-e290-4f43-9cab-5fd0ae360b30.mock.pstmn.io/api/users/', {
            method: 'POST',
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
    }

    const backHandler = () => {
        console.log("Back")
    }


    const updatedData = {
        "firstName": firstname,
        "lastName": lastname,
        "email": Email,
        "password": Password
    }

    return (
        <div className="container">
            <Sidebar />
            <div className='wrapper'>
                <div className="main-content">
                   
                </div>
                <div className='column outset'>
                <div className="content-title">tesc.events</div>
                    <form className = 'registration-form'>
                        <input type="text" placeholder="First Name" id="FName" className="text-input inset" onChange={handlefirst} />
                        <input type="text" placeholder="Last name" id="LName" className="text-input inset" onChange={handleLast} />
                        <input type="text" placeholder="Email" id="Email" className="text-input inset" onChange={handleEmail} />
                        <input type="text" placeholder="Password" id="Password" className="text-input inset" onChange={handlePassword} />
                        <input type="text" placeholder="Confirm Password" id="Confirm" className="text-input inset" onChange={handleConfirm} />
                    </form>

                    <div className="Save-button">
                        <button className="button" onClick={saveHandler}>Register</button>
                    </div>
                    <div className="Back-button-cont">
                        <button className="Back-button" onClick={backHandler}>Back to Login</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;