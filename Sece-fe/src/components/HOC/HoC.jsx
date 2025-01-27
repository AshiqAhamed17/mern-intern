//import React from 'react'
import Button from "./Button"
import trackingButtonComponent from "./trackingButtonComponent"

const HoC = () => {
    const ButtonWithTracking = trackingButtonComponent(Button);

  return (
    <div>
      <h2>This is an example for higher order components</h2>
      <ButtonWithTracking name="login" trackingInfo={{name: "AS", customerId:"23345656",password:"hello@sece"}}/>
    </div>
  )
}

export default HoC