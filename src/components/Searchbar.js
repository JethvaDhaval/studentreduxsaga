import React, { useState } from 'react'

export default function Searchbar(props) {
    const [search, setSearch] = useState("");

    const handlSearch = (e) => {
        setSearch(e.target.value);
        props.handlSearch(e.target.value);
    }

    return (
        <div>
            <form className="form-inline">
                <input className="form-control mr-sm-2 mt-1 mb-1" type="search" placeholder="Search Student Here..." aria-label="Search" value={search} onChange={e => handlSearch(e)} />
            </form>
        </div>
    )
}
