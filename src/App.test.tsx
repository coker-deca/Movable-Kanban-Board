/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './App';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store: MockStoreEnhanced<any, any>;

  it('Shows Button Text', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText('Create Project')).not.toBeNull();
  });

  it('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
  });
});
