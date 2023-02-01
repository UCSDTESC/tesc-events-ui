import Sidebar from "../components/Sidebar";
import "../index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';

const ProfilePage = (): JSX.Element => {
    return (
        <div className="container">
            <Sidebar />
            <div className='some-page-wrapper'>
                <div className="main-content">
                    <h1 className="content-title">Profile</h1>
                </div>
                <div className='column outset'>

                    <div className='one-column inset'>
                        <h1 className="second-text">Personal</h1>
                        <form>
                            <input type="text" placeholder="First Name" className="text-input" />
                        </form>

                        <form>
                            <input type="text" placeholder="Last name" className="text-input" />
                        </form>
                        <form>
                            <input type="text" placeholder="Phone" className="text-input" />
                        </form>
                        <form>
                            <input type="text" placeholder="Gender" className="text-input" />
                        </form>
                        <form>
                            <input type="text" placeholder="Pronouns" className="text-input" />
                        </form>
                        <form>
                            <input type="text" placeholder="Ethnicity" className="text-input" />
                        </form>
                    </div>


                    <div className='one-column inset'>
                        <h1 className="second-text">Education</h1>
                        <form>
                            <input type="text" placeholder="Major" className="text-input" />
                        </form>
                        <form>
                            <input type="text" placeholder="Graduating Year" className="text-input" />
                        </form>
                        <form>
                            <input type="text" placeholder="GPA" className="text-input" />
                        </form>
                        <form>
                            <input type="text" placeholder="PID" className="text-input" />
                        </form>
                    </div>

                    <div className="Save-button">
                        <button className="button">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;