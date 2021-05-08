/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { DiceOptions } from '../../components/DiceOptions';

describe('<DiceOptions />', () => {

    test('should set initial default faces', () => {
        const mockHandler = jest.fn();
        render(<DiceOptions getFaces={mockHandler} />)
        expect(mockHandler).toHaveBeenCalledTimes(1)
    });
});