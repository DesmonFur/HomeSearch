import React, {useState} from 'react';
import axios from 'axios';
import HomesList from "./HomesList";
function Searchbar() {

 const [search, setSearch] = useState("Search here");
 const [homes, setHomes] = useState([])

 function handleChange(e) {
        setSearch(e.target.value);
    }

function searchHomes (){
    axios.get(`/api/home/address?address=${search}`).then(res => {
        setHomes(res.data)
    });
}

    return (
        <div>
            <p>Search Query:</p>
            <input type="Name: " id="name" onChange={handleChange}/>
            <button onClick={searchHomes}>Search</button>
            <HomesList homes={homes} />
        </div>
    );
}

export default Searchbar;