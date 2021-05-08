/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Dice } from '../../components/Dice';

describe('<Dice />', () => {

    test('should render 6 total faces', () => {
        const component = render(<Dice turnFlag={true} />)
        component.getAllByText(6);
    });
});