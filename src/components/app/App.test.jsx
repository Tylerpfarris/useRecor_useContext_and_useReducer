import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from '../../state/Provider';
import { initialState, recordReducer } from '../../state/reducer';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(
      <Provider
        reducer={recordReducer}
        initialState={initialState}
      >
        <App />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();

    const undoEl = screen.getByTestId('undo-button');
    expect(undoEl).toHaveTextContent('undo');
    const redoEl = screen.getByTestId('redo-button');
    expect(redoEl).toHaveTextContent('redo');
    const displayEl = screen.getByTestId('display-div');
    expect(displayEl).toHaveStyle({
          backgroundColor: 'current',
          width: '10rem',
          height: '10rem',
    });
    const colorSelectorEl = screen.getByTestId('color-selector');
    expect(colorSelectorEl).toHaveAttribute('type', 'color');

        fireEvent.input(colorSelectorEl, { target: { value: '#333333' } });
        expect(colorSelectorEl).toHaveValue('#333333');

        fireEvent.input(colorSelectorEl, { target: { value: '#ff3333' } });
        expect(colorSelectorEl).toHaveValue('#ff3333');

        userEvent.click(undoEl);
        expect(colorSelectorEl).toHaveValue('#333333');

        userEvent.click(redoEl);
        expect(colorSelectorEl).toHaveValue('#ff3333');
  });
});
