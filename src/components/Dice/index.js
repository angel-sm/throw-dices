import React from 'react';
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

export const Dice = () => {
    return(
        <Scene>
            <Cube>
                <FrontFace />
                <BackFace />
                <BottomFace />
                <TopFace />
                <RightFace />
                <LeftFace />
            </Cube>
        </Scene>
    );
};