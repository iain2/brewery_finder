import React, { useState, useEffect } from "react";
import BreweryList from "../components/BreweryList";
import Header from "../components/Header";
import FilterBreweries from "../components/FilterBreweries";
// import FilterByType from "../components/FilterByType";
// import Map from "../components/Map";

const BreweryContainer = ({ states, breweryTypes }) => {

    const [breweries, getBreweries] = useState([]);
    const [state, selectState] = useState("");
    // const [type, selectType] = useState("micro");


    // useEffect(() => {
    //     fetch('https://api.openbrewerydb.org/breweries?per_page=50')
    //         .then(res => res.json())
    //         .then(data => getBreweries(data));
    // }, [])

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`)
            .then(res => res.json())
            .then(data => getBreweries(data));
    }, [state])

    const onSelectState = (state) => {
        selectState(state)
    }

    // const onSelectType = (type) => {
    //     selectType(type)
    //     console.log(type)
    // }

    const header = "Brewery Finder"



    return (
        <>
            <Header header={header} />
            <FilterBreweries states={states} onSelectState={onSelectState} /><br></br>
            {/* <FilterByType breweryTypes={breweryTypes} onSelectType={onSelectType} /> */}
            {/* <Map /> */}
            <BreweryList breweries={breweries} />
        </>

    )
}

export default BreweryContainer