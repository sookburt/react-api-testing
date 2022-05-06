import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node';

const server = setupServer(rest.get("https://ghibliapi.herokuapp.com/films/",
  (req, res, ctx) => { 
    return res(
      ctx.status(200, 'Mocked OK Status'),
      ctx.json(
        [
          {
            id: '1',
            title: 'Castle in the Sky',
          },{
            id: '2',
            title: 'Another film title',
          }
        ]
      ),
    )
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('renders h1 tag with title of app', () => {
  render(<App />);
  const h1Element = screen.getByText(/Welcome to Testing API Calls with MSW/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders Castle in the Sky', async()  => {

  render(<App />); 
  await waitFor(() => screen.findByText('Films:'));
  const filmElement = await screen.findByText(/Castle in the Sky/i);
  expect(filmElement).toBeInTheDocument();
  
})

