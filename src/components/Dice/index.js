/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { 
    Scene,
    Cube,
    FrontFace,
    BackFace,
    RightFace,
    LeftFace,
    TopFace,
    BottomFace
} from './styles';

export const Dice = ({turnAll, faces}) => {
    
    const [turn, setTurn] = useState(false);    
    const [num, setNum] = useState(0);
    
    const generateNumber = () => {
        const randomNum =  Math.floor(Math.random() * faces) + 1;
        return num === randomNum ? generateNumber() : randomNum
    }

    const turnDice = () => {
        const getNumber = new Promise((resolve, rejec) => {
            setTurn(turn => !turn);
            setTimeout(() => {
                resolve(generateNumber())
            }, 2000);
        })

        getNumber.then(number => {
            setTurn(turn => !turn);
            setNum(number)
        })
    };

    useEffect(() => {
        turnDice()
    }, [turnAll])

    return(
        <Scene>
            <Cube turn={turn}>
                <FrontFace>
                    {
                        turn ? '' : num
                    }
                </FrontFace>
                <BackFace />
                <BottomFace />
                <TopFace />
                <RightFace />
                <LeftFace />
            </Cube>
        </Scene>
    );
};