import React from 'react'
import LiveOrdersNotes from './LiveOrdersNotes'
import Row from './Row'

const LiveOrders = () => {
  return (
    <div className='live-orders'>
        <Row fontSize={50}>
            <p>Pizza Margarita</p>
            <p>2</p>
            <p>30$</p>
            <p>18:30</p>
            <p>John</p>
        </Row>
        <div>
            <LiveOrdersNotes/>
        </div>
    </div>
  )
}

export default LiveOrders