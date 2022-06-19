import React from "react";
import BreweryListItem from "./BreweryListItem";

const BreweryList = ({ breweries }) => {

    const breweryNodes = breweries.map((brewery, index) => {
        return <BreweryListItem brewery={brewery} key={index} />
    })



    return (

        <>
            <h2>BreweryList</h2>
            <ul>{breweryNodes}</ul>

        </>
    )
}

export default BreweryList