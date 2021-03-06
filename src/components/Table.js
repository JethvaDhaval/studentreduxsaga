import React from 'react'
import RemoveButton from './RemoveButton'
import { useSelector } from "react-redux";

export default function Table(props) {

    const students = useSelector(state => state.students);
    const studentfilterlength = props.studentfilter.length;
    const search =  props.search;
        
    return (
        <div>
            {
                (studentfilterlength === 0 && search !== "") ?
                    <h1>No Student Found...</h1> : (
                        <table className="table">
                            {
                                (students.length !== 0) ?
                                    (
                                        <thead>
                                            <tr>
                                                <th scope="col">RollNo</th>
                                                <th scope="col">Name</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                    ) : ""
                            }
                            <tbody>
                                {
                                    (search === "") ? students.map((student, index) => (
                                        <tr key={index}>
                                            <td>{student.rollno}</td>
                                            <td>{student.name}</td>
                                            <td><RemoveButton student={student}/></td>
                                        </tr>
                                    ))
                                        :
                                        props.studentfilter.map((student, index) => (
                                            <tr key={index}>
                                                <td>{student.rollno}</td>
                                                <td>{student.name}</td>
                                                <td><RemoveButton student={student}/></td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    )
            } 
        </div>
    )
}
