import PropTypes from 'prop-types'
const msg = { name: 'Felipe' }

const sendMessage = () => {
  return msg.name
}

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        repudiandae eaque animi saepe. Quidem corporis architecto dicta
        consequuntur eaque consequatur numquam iste itaque cupiditate odio
        repudiandae, ab ipsa eveniet ducimus.
      </p>
      {sendMessage()}
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Felipe Navas',
  subTitle: 'No subtitle',
  title: 'No title',
}
