import styled, { keyframes } from 'styled-components'; 

export const rotate = keyframes`
 0%  { transform: translateZ(-100px) rotateY( 0deg); }
 100% { transform: translateZ(-100px) rotateX( 360deg) rotateY( 360deg); }
`

export const Scene = styled.div`
    width: 100px;
    height: 100px;
    perspective: 1000px;
`;

export const Cube = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    animation-name: ${props => props.turn === true ? rotate : ''};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

const Face = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: .2em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    color: #fff;
`;

export const FrontFace = styled(Face)`
    transform: rotateY(  0deg) translateZ(50px); 
    background-color: red;
`;

export const RightFace = styled(Face)`
    transform: rotateY( 90deg) translateZ(50px);;
    background-color: aliceblue;
`;

export const BackFace = styled(Face)`
    transform: rotateY(180deg) translateZ(50px);;
    background-color: aqua;
`;

export const LeftFace = styled(Face)`
    transform: rotateY(-90deg) translateZ(50px);;
    background-color: burlywood;
`;

export const TopFace = styled(Face)`
    transform: rotateX( 90deg) translateZ(50px);; 
    background-color: cornsilk;
`;

export const BottomFace = styled(Face)`
    transform: rotateX(-90deg) translateZ(50px);;
    background-color: crimson;
`;