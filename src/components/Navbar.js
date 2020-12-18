import { Link, NavLink } from 'react-router-dom';

import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/">Student</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink className="btn btn-outline-light my-2 my-sm-0 ml-auto" exact to="/addstudent">Add Student</NavLink>
                </div>
            </nav>
        </div>
    )
}
