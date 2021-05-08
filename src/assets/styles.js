import styled from 'styled-components';

export const MainContent = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    background-color: #f4f4f4;
`;

export const BoardContent = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    padding: 1em;
`;

export const DicesGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 80vh;
    margin: auto;
    overflow-y: scroll;
`;

export const ButtonsGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
`;

export const DiceSpace = styled.div`
    width: 30%;
    padding: 1em;
`;

export const Button = styled.button`
    width: 100%;
    padding: 1em;
    margin: .5em 0;
    font-size: 1.7em;
    font-weight: bold;
    border: none;
    border-radius: .3em;
    box-shadow: 4px 4px 2px 2px rgba(0,0,0,.2);
    color: #fff;
    cursor: pointer;
    transition: all ease .5s;

    &:hover{
        transform: scale(0.9);
    }
`;

export const RollButton = styled(Button)`
    background: #2ecc71;
    &:hover{
       background: #27ae60;
    }
`;

export const NewDiceButton = styled(Button)`
    background: #3498db;
    &:hover{
       background: #2980b9;
    }

`;

export const DeleteDiceButton = styled(Button)`
    background: #e74c3c;
    &:hover{
       background: #c0392b;
    }
`;

export const Instructions = styled.p`
    text-align: center;
    margin-top: .5em;
    padding: 1em;
    background: rgba(0,0,0,.1);
    border-radius: .3em;
`;