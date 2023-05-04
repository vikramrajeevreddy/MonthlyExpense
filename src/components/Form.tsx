import React, { FormEvent } from 'react'

export const Form = () => {


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log("submitted");
  }  
  return (
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Description</label>
              <input id="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">    
              <label htmlFor="" className="form-label">Amount</label>
              <input type="number" className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
      </form>
  )
}
