import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateData from './UpdateData';

function DetailsTable() {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('https://weekend-full-crud.onrender.com/employee')
            .then((res) => {
                console.log(res.data);
                setEmployees(res.data);
            })
    });

    const handleDelete = (id)=>{
        axios.delete(`https://weekend-full-crud.onrender.com/delete/${id}`)
        .then((res)=>{
            console.log(res.data);
            alert("Employee Deleted successfully...");
            setEmployees(employees.filter((employee)=>employee._id !== id));
        })
    }
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr className='table-active text-center'>
                        <th>S.No</th>
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => {
                            return (
                                <tr className='text-center' key={index}>
                                    <td>{index+1}</td>
                                    <td>{employee.employeeId}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.address}</td>
                                    <td><UpdateData id={employee._id}/></td>
                                    <td><button onClick={()=>handleDelete(employee._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DetailsTable