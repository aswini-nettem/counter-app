import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders the counter heading', () => {
  render(<App />)
  const heading = screen.getByText('Counter App')
  expect(heading).toBeInTheDocument()
})

test('count increases when increment is clicked', () => {
  render(<App />)

  const input = screen.getByRole('spinbutton')
  fireEvent.change(input, { target: { value: '2' } })

  const incrementBtn = screen.getByText('INCREMENT')
  fireEvent.click(incrementBtn)

  expect(
    screen.getByText((content, element) => element.textContent === 'Count : 2')
  ).toBeInTheDocument()
})