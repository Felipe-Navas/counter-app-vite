import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Testing the FirstApp', () => {
  const title = 'First app title'
  const subTitle = 'First app subtitle'

  test('should render correctly with the snapshot', () => {
    const { container } = render(<FirstApp title={title} />)

    expect(container).toMatchSnapshot()
  })

  test('should show the title in the screen', () => {
    render(<FirstApp title={title} />)

    expect(screen.getByText(title)).toBeTruthy()
   })

   test('should show the title in a h1 tag', () => {
    render(<FirstApp title={title} />)

    expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe(title)
   })

   test('should show the subtitle', () => {
    render(<FirstApp title={title} subTitle={subTitle} />)

    expect(screen.getAllByText(subTitle).length).toBe(1)
   })
})
