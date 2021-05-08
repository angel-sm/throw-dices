/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: -2em;
`;

const Faces = styled.img`
    max-width:25px;
    cursor: pointer;
    transition: all ease 1s;
    
    &:hover{
      transform: rotateY(180deg);

    }
    
`;

export const DiceOptions = ({ getFaces }) => {

  const [faces, setFaces] = useState(6);

  const setFacesNumber = () => {
    let number = prompt('Numero de caras');

    if(number < 2){
      number = 2;
    }

    getFaces(number);
    setFaces(number);
  };

  useEffect(() => {
    getFaces(faces);
  }, []);


  return (
    <OptionContainer>
        <Faces src="https://img.icons8.com/fluent-systems-regular/48/000000/dice.png" onClick={setFacesNumber}/>
        <span>{faces}</span>
    </OptionContainer>
  )
};
