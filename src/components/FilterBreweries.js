import React from "react";

const FilterBreweries = ({ states, onSelectState }) => {

    const stateOptions = states.map((state, index) => {
        return <option key={index} value={index}>{state.state_name}</option>
    })

    const handleChange = (event) => {
        const chosenState = states[event.target.value]
        const chosenStateLowerCase = chosenState.state_name.toLowerCase();
        const state = chosenStateLowerCase.replace(/ /g, "_");
        onSelectState(state)
    }


    return (
        <>

            <select onChange={handleChange} >
                <option selected disabled value="">Filter by State</option>
                {stateOptions}
            </select>
        </>
    )
}

export default FilterBreweries