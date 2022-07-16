import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Testing the FirstApp', () => {
  xtest('should render correctly with the snapshot', () => {
    const title = 'First app title'
    const { container } = render(<FirstApp title={title} />)

    expect(container).toMatchSnapshot()
  })

  test('should show the title in a h1 tag', () => {
    const title = 'First app title'
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

    expect(getByText(title)).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toBe(title)
    // expect(h1.innerHTML).toContain(title)

    expect(getByTestId('test-title').innerHTML).toBe(title)
   })

   test('should show the subtitle', () => {
    const title = 'First app title'
    const subTitle = 'First app subtitle'
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />)

    expect(getAllByText(subTitle).length).toBe(1)
   })
})
