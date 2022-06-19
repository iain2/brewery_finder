import React from "react";

const FilterByType = ({ breweryTypes, onSelectType }) => {

    const typeOptions = breweryTypes.map((type, index) => {
        return <option key={index} value={index}>{type}</option>
    })

    const handleChange = (event) => {
        const type = breweryTypes[event.target.value]
        onSelectType(type)

    }

    return (

        <select onChange={handleChange} >
            <option selected disabled value="">Filter by Type</option>
            {typeOptions}
        </select>
    )
}

export default FilterByType