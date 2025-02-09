import React from 'react'
import team from '../assets/team.gif'
import Form from '../components/Form'

function AddEmployee() {
  return (
    <div>
      <div style={{ height: "80vh" }} className="container mt-5 border border-warning rounded-5 w-100">
        <div className="row align-items-center">
          <div className="col text-center p-5">
            <h1>ADD EMPLOYEE</h1>
            <img src={team} alt="" />
          </div>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
      </div>
      )
}

      export default AddEmployee