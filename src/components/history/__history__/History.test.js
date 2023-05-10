import React from 'react';
import { render, screen } from '@testing-library/react';
import History from '../History';

describe('History', () => {
  const results = {
    'Player 1': [0, 2, 1],
    'Player 2': [1, 0, 2]
  };
  const setPlayer1TotalScore = jest.fn();
  const setPlayer2TotalScore = jest.fn();

  beforeEach(() => {
    render(
      <History
        results={results}
        setPlayer1TotalScore={setPlayer1TotalScore}
        setPlayer2TotalScore={setPlayer2TotalScore}
      />
    );
  });

  it('should render the correct table headers', () => {
    expect(screen.getByText('Player 1 (3)')).toBeInTheDocument();
    expect(screen.getByText('Player 2 (0)')).toBeInTheDocument();
  });

  it('should render the correct table rows', () => {
    expect(screen.getByText('Player 1(rock)')).toBeInTheDocument();
    expect(screen.getByText('Player 2(scissor)')).toBeInTheDocument();
    expect(screen.getByText('Player 1(paper)')).toBeInTheDocument();
    expect(screen.getByText('Player 2(rock)')).toBeInTheDocument();
    expect(screen.getByText('Player 1(scissor)')).toBeInTheDocument();
    expect(screen.getByText('Player 2(paper)')).toBeInTheDocument();
  });

  it('should call setPlayer1TotalScore and setPlayer2TotalScore with the correct values', () => {
    expect(setPlayer1TotalScore).toHaveBeenCalledWith(3);
    expect(setPlayer2TotalScore).toHaveBeenCalledWith(0);
  });
});
