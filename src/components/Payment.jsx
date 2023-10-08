import React from 'react'

const Payment = props => {
  return (
    <>
    <div className="payment-item col-lg-3 col-sm-6 text-center mb-5">
        <div className="payment-icons">
            <img className="payment-icon" src={props.iconPath} alt={props.iconAlt} />
        </div>
    </div>
    </>   
  )
}

export default Payment