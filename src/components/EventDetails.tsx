import React from "react";
import ReactDOM from "react-dom"
import "../assets/css/EventDetails.css";
import styled from 'styled-components';

interface ModalProps {
    onBackdropClick: () => void;
    children?: React.ReactNode;
}

const Overlay = styled.div`
    background-colo: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const EventDetails: React.FC<ModalProps> = ({onBackdropClick, children}) => {

    return ReactDOM.createPortal(<Overlay onClick={onBackdropClick}>
        <div onClick={e => e.stopPropagation()}>
            {children}
        </div>
        
    </Overlay>, document.getElementById("modal-root")!);
}

export default EventDetails;