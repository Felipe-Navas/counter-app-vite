import React from 'react'
const msg = { name: 'Felipe' }

const sendMessage = () => {
  return msg.name
}

export const FirstApp = () => {
  return (
    <>
      <h1>First App</h1>
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
