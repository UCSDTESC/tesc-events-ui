import styled from 'styled-components'

const ModalContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;


export const DesktopModalContainer = styled(ModalContainer)`
    box-shadow: 0 0 32px rgba(0,0,0,0.5);
    width: 800px;
    height: 600px;
    padding: 1px;
    `

export const Header = styled.div`
    color: white;
    font-size: 35px;
    line-height: 1em;
    font-weight: 300
    `