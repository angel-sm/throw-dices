import styled, { keyframes } from 'styled-components'; 

export const rotate = keyframes`
 0%  { transform: translateZ(-100px) rotateY( 0deg); }
 100% { transform: translateZ(-100px) rotateX( 360deg) rotateY( 360deg); }
`

export const Scene = styled.div`
    width: 200px;
    height: 200px;
    perspective: 1000px;
    position: relative;
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
    width: 200px;
    height: 200px;
    border-radius: .1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5em;
    font-weight: bold;
    color: #34495e;
    background: linear-gradient(142deg, rgba(127,140,141,1) 32%, rgba(128,141,142,0.7794468129048494) 33%, rgba(189,195,199,1) 90%);
    border: 1px solid rgba(0,0,0,.2);
`;

export const FrontFace = styled(Face)`
    transform: rotateY(  0deg) translateZ(100px); 
`;

export const RightFace = styled(Face)`
    transform: rotateY( 90deg) translateZ(100px);;
`;

export const BackFace = styled(Face)`
    transform: rotateY(180deg) translateZ(100px);;
`;

export const LeftFace = styled(Face)`
    transform: rotateY(-90deg) translateZ(100px);;
`;

export const TopFace = styled(Face)`
    transform: rotateX( 90deg) translateZ(100px);; 
`;

export const BottomFace = styled(Face)`
    transform: rotateX(-90deg) translateZ(100px);;
`;