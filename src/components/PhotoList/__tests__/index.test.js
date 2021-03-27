import React from 'react';
import PhotoList from '../'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('Photolist is rendering', () => {
    it('renders', () => {
        render(<PhotoList/>);
    });
    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
})