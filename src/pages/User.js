import React, { useState } from 'react'

import Searchbar from '../components/Searchbar';
import Table from '../components/Table';
import { useSelector } from "react-redux";

export default function User(props) {
    const [search, setSearch] = useState("");

    const [studentfilter, setStudentFilter] = useState([])

    const handlSearch = (name) => {
        setSearch(name);
        setStudentFilter(students.filter(student => student.name.startsWith(name)));
    }

    const students = useSelector(state => state.students);

    return (
        <div>
            <Searchbar handlSearch={handlSearch} />
            <Table studentfilter={studentfilter} search={search} />
        </div>
    )
}
