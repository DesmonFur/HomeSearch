import React from 'react';
import {ImageListItem, ImageList} from "@material-ui/core";
import Swal from 'sweetalert2'

const  HomesList = ({homes, loading}) => {
    const openHomeUrl = (url, address) => {
        if (url) {
            window.open(
                url, "_blank");
        } else {
            Swal.fire({
                title: 'Sorry!',
                text: `No online link found for ${address}`,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    const homeList = <ImageList className="home-tile-list" rowHeight="auto" cols={5}>
        {homes.map((home, index) => (
            <ImageListItem key={index} className="home-tile" onClick={() => openHomeUrl(home.Home_Url, home.Address)}>
                <h3>Home Info</h3>
                <ul>
                    <li> Address: <span> {home.Address ? home.Address : "N/A"}</span></li>
                    <li> City: <span>{home.City ? home.City : "N/A"}</span></li>
                    <li> State: <span>{home.State ? home.State : "N/A"}</span></li>
                    <li> Price: <span>{home.Price ? home.Price : "N/A"}</span></li>
                    <li> # of Bedrooms: <span>{home.Bedrooms ? home.Bedrooms : "N/A"}</span></li>
                    <li> # of Bathrooms: <span>{home.Bathrooms ? home.Bathrooms : "N/A"}</span></li>
                    <li> Square Footage: <span>{home.Square_Footage ? home.Square_Footage : "N/A"}</span></li>
                    <li> Year Built: <span>{home.Year_Built ? home.Year_Built : "N/A"}</span></li>
                    <li> Property Type: <span>{home.Property_type ? home.Property_type : "N/A"}</span></li>
                </ul>
            </ImageListItem>
        ))}
    </ImageList>

    return (
        <div>
            {loading ? <h1 className="loading-text">Loading</h1>  :
                <div>{homes.length > 0 ? homeList :
                    <h1 className="no-matching-homes-text"> No homes with similar address found.</h1>}</div>
            }
        </div>
    );
}

export default HomesList;