import React from 'react'
import PromoHeading from './PromoHeading'
import Clock from './Clock'

const Promo = () => {
    const date = new Date()
  const data = {
    heading: "99% off all items!",
    callToAction: "Everything must go!"
  }

    return (
    <div className='promo'>
        <Clock
            message={date.toLocaleTimeString()}
        />
        <PromoHeading
            heading={data.heading}
            callToAction={data.callToAction}
        />
    </div>
  )
}

export default Promo