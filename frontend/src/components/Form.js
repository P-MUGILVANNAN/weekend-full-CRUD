import React, { useState } from 'react';
import axios from 'axios';

function Form() {

    const [employeeId,setEmployeeId] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    const handleSubmit=(event)=>{
        event.preventDefault();

    const Details = {
        employeeId,
        firstName,
        lastName,
        email,
        phone,
        address,
    };

    console.log('Form Details:', Details);  // Log the form data
    axios.post('http://localhost:8000/Form',Details)
    .then((res)=>{
        console.log(res.data);
        alert("Employee added successfully");
        window.location.reload();
        window.location.replace('/viewEmployee');
    })
    .catch((err)=>{
        console.log(err);
    })
    }

  return (
    <div className='py-5'>
        <form
        className="col-12 d-flex flex-column mx-auto py-4 px-5 border border-secondary-subtle rounded-5 shadow"
        onSubmit={handleSubmit}
      >
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Employee ID:</span>
          <input
            className="form-control w-25"
            type="number"
            name="Eid"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e)=>setEmployeeId(e.target.value)}
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">First Name:</span>
          <input
            className="form-control w-75"
            type="text"
            name="firstname"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Last Name:</span>
          <input
            className="form-control w-75"
            type="text"
            name="lastname"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Email:</span>
          <input
            className="form-control w-75"
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Employee E-mail"
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Phone:</span>
          <input
            className="form-control w-75"
            type="tel"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="Employee Phone"
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">City:</span>
          <input
            className="form-control w-75"
            name="address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            placeholder="Employee City"
            required
          />
        </label>
        <div className="my-2 px-5">
          <hr />
        </div>
        <button
          type="submit"
          className="btn btn-outline-warning fw-bold w-50 mx-auto shadow"
        >
          
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form