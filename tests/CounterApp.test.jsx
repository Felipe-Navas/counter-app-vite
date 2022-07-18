import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Testing the CounterApp', () => {
  const initialValue = 10

  test('should render correctly with the snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />)

    expect(container).toMatchSnapshot()
  })

  test('should show the value in the screen', () => {
    render(<CounterApp value={initialValue} />)

    expect(screen.getByText(initialValue)).toBeTruthy()
   })

   test('should show the value in a h2 tag', () => {
    render(<CounterApp value={10} />)

    expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe(' 10 ')
   })

   test('should increment the value when click on the button +1', () => {
    render(<CounterApp value={initialValue} />)

    fireEvent.click(screen.getByText('+1'))

    expect(screen.getByText(initialValue + 1)).toBeTruthy()
   })

   test('should decrement the value when click on the button -1', () => {
    render(<CounterApp value={initialValue} />)

    fireEvent.click(screen.getByText('-1'))

    // * This prints the content of the <body></body> of the component rendered
    // screen.debug()

    expect(screen.getByText(initialValue - 1)).toBeTruthy()
   })

    test('should reset the value when click on the button Reset', () => {
    render(<CounterApp value={654} />)

    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))

    fireEvent.click(screen.getByText('Reset'))

    expect(screen.getByText(654)).toBeTruthy()
    })

})
