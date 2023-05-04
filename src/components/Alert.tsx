import React, { Children } from 'react'
interface Props{
    children: String
    onClose: () => void
}

const Alert = ({children, onClose}: Props) => {
  return (
    <>
    <div className='alert alert-warning alert-dismissible'>{children}
    <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
    </button>
    </div>
  </>
  )
}

export default Alert