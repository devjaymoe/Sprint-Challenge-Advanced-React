import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from '../App';
import axios from 'axios'

test('Test data is visible on dom', async () => {
    // arrange
    const { getByTestId, getAllByTestId } = render(<App />);

    // act

    // assert 
    
    const data = await axios
                        .get(`http://localhost:5000/api/players`)
                        .then(response => {
                            return response.data[1].name
                        });
    expect(data).toBe('Megan Rapinoe');
    
    const players = getByTestId('players')
    expect(players).toBeVisible();
    const player = getAllByTestId('players');
    expect (player[0]).toBeVisible();
})

test('test darkmode button', () => {
    const { getByTestId } = render(<App />)

    const toggleButton = getByTestId('button')

    fireEvent.click(toggleButton)

    expect(toggleButton).toHaveAttribute('class', 'toggle toggled')
})