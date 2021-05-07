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
    transform: rotateX(360deg);
`;

const Tag = styled.span`

`;

export const DiceOptions = ({ getFaces }) => {

  const [faces, setFaces] = useState(6);

  const setFacesNumber = () => {
    const number = prompt('Numero de caras');
    getFaces(number);
    setFaces(number);
  };

  useEffect(() => {
    getFaces(faces);
  }, []);


  return (
    <OptionContainer>
        <Faces src="https://img.icons8.com/fluent-systems-regular/48/000000/dice.png" onClick={setFacesNumber}/>
        <Tag>{faces}</Tag>
    </OptionContainer>
  )
};
