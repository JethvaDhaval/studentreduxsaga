import React from 'react';
import {removeStudent} from '../redux/action/students/removeStudentAction';
import { useDispatch } from "react-redux";

export default function RemoveButton(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={() => dispatch(removeStudent(props.student))}>Remove</button>
        </div>
    )
}
