import React from 'react'
import office from '../assets/office.gif'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
        <h1 className='text-center mt-5 pt-5'><span className='text-warning'>C</span>ompan<span className='text-warning'>Y</span></h1>

        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 text-center col-lg-6 col-md-6 col-sm-12">
                    <img src={office} alt="" height="450px" width="60%"/>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo quo facilis incidunt ullam. Saepe, iure omnis! Dignissimos recusandae harum minima amet perferendis similique! Quas qui in fuga omnis laboriosam.</p>
                    </div>
                    <div className='text-center mt-5'>
                        <Link to='/addEmployee'><button className='btn btn-secondary btn-lg'>Add Employee</button></Link>&nbsp; &nbsp; &nbsp; &nbsp;
                        <Link to='/viewEmployee'><button className='btn btn-light btn-lg border border-secondary'>View Employees</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero