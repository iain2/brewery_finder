import React from "react";

const BreweryListItem = ({ brewery }) => {



    return (
        <>
            <p><b>{brewery.name}</b>, {brewery.state}</p>

        </>
    )
}

export default BreweryListItem