import axios from 'axios';
import React, { useState } from 'react'

function UpdateData({ id }) {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const UpdateDetails = { firstname, lastname, email, phone, address };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(UpdateDetails);

        const url = `https://weekend-full-crud.onrender.com/update/${id}`;

        axios.put(url, UpdateDetails)
            .then((res) => {
                console.log(res.data);
                alert("Employee Updated Successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <button type="button" className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target={`#UpdateDetails-${id}`}>
                Edit
            </button>

            <div className="modal modal-lg fade border-secondary" id={`UpdateDetails-${id}`} tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"> Update Employee Details : </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleUpdate}>
                            <div className="modal-body">
                                <div className='row py-2 border border-2 border-secondary-subtle rounded-4' >
                                    <div className='py-2 col-6'>
                                        <label className='me-2'>First Name : </label>
                                        <input type='text' name='fname' onChange={(e) => { setFirstname(e.target.value) }} required />
                                    </div>
                                    <div className='py-2 col-6'>
                                        <label className='me-2'>Last Name : </label>
                                        <input type='text' name='lname' onChange={(e) => { setLastname(e.target.value) }} required />
                                    </div>
                                    <div className='py-2 col-10'>
                                        <label className='me-2'>Employee Email : </label>
                                        <input type='text' name='email' className='w-75' onChange={(e) => { setEmail(e.target.value) }} required />
                                    </div>
                                    <div className='py-2 col-6'>
                                        <label className='me-2'>Phone : </label>
                                        <input type='text' name='phone' onChange={(e) => { setPhone(e.target.value) }} required />
                                    </div>
                                    <div className='py-2 col-6'>
                                        <label className='me-2'>City : </label>
                                        <input type='text' name='address' onChange={(e) => { setAddress(e.target.value) }} required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary me-1 border-2 border-dark" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success border-2 border-secondary" data-bs-dismiss="modal" onClick={() => { console.log("Employee ID : ", id) }}>Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateData