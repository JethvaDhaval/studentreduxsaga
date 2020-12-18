import React, { useState } from 'react'

import { addStudent } from "../redux/action/students/addStudentAction";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

export default function AddStudentForm() {
    let history = useHistory();

    const [inputs, setInputs] = useState({
        rollno: "",
        name: ""
    });

    const onSubmit = async e => {
        e.preventDefault();
        dispatch(addStudent(inputs))
        history.push("/");
    }

    const onInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();

    return (
        <div>
            <div className="container mt-5">
                <div className="w-90 mx-auto shadow p-1">
                    <h3>Add Student</h3>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter RollNo..." name="rollno" value={inputs.rollno}
                                onChange={(e => onInputChange(e))} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Name..." name="name" value={inputs.name}
                                onChange={(e => onInputChange(e))} />
                        </div>
                        <button className="btn btn-primary btn-block">Add Student</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
