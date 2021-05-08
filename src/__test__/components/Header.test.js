import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import {Navbar} from '../../components/Navbar';

test('render component', () => {
    const component = render(<Navbar />)
    const nav = component.container.querySelector('nav')
    expect(nav).toHaveTextContent('Throw Dice')
})