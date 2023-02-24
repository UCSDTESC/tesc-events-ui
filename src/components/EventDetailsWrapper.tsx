import React from 'react';
import EventDetails from './EventDetails';
import "../assets/css/EventDetails.css";
import ReactDOM from 'react-dom';

import { DesktopModalContainer, Header } from './ModalPopup.styles';

interface EventDetailsWrapperProps {
    isModalVisible: boolean,
    onBackdropClick: () => void;
}

const EventDetailsContent = (): JSX.Element => {

    return(

        <div className='popup-container'>
            <h1 className = 'popup-header'>TESC</h1>
            <div className='popup-content'>
                <div className='popup-description'>
                    <h2 className='title'>Disciplines of Engineering Career Fair</h2>
                     <p className='date'>date</p>
                     <p className='location'>location</p>
                     <p className='description'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                </div>
                <div className='popup-interactive'>
                    <h2 className='title'>Why do you want to get hired?</h2>
                    <textarea placeholder="Write your response here" className='text-response'></textarea>
                    <h2 className='title'>Upload Resume</h2>
                    <div className='upload'>
                        <button className='upload-button'>Upload</button>
                        <p className='upload-text'>Shane's Resume.pdf</p>
                    </div>
                    <div className='submit-div'>
                        <button className='submit-button'>SUBMIT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

const EventDetailsWrapper: React.FC<EventDetailsWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if (!isModalVisible) {
        return null
    }
    
    return (<EventDetails onBackdropClick={onBackdropClick}>

        <DesktopModalContainer>
            <EventDetailsContent />
        </DesktopModalContainer>
    </EventDetails>);
}


export default EventDetailsWrapper;