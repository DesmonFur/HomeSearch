import React from 'react';

function HomesList({homes}) {


const homesList = homes.map((home, index) => (
        <div key={index}>
            <p >{home.ADDRESS}</p>
        </div>

    ))
    return (
        <div>
            {homesList}
</div>
    );
}

export default HomesList;