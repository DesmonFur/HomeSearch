import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HomesList from "./HomesList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [homes, setHomes] = useState([]);

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const searchHomes = () => {
        axios.get(`/api/home/address?address=${search}`).then(res => {
            setHomes(res.data)
        });
    }

    useEffect(() => {
        axios.get(`/api/home/address?address=${search}`).then(res => {
            setHomes(res.data)
            setLoading(false)
        });
    }, [search])


    return (
        <div className="search-homes-content">
            <div className="wrap">
                <h1>Home Address Lookup</h1>
                <div>
                    <form action="#" onSubmit={searchHomes} className="search">
                        <input type="Search: " id="search" className="search-term" onChange={handleChange}/>
                        <button type="submit" className="search-button" onClick={searchHomes}><FontAwesomeIcon
                            icon={faSearch}></FontAwesomeIcon>
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <HomesList homes={homes} loading={loading}/>
            </div>
        </div>
    );
}

export default Searchbar;