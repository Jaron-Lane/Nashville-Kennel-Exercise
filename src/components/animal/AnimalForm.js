import React, { useContext, useEffect, useRef } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"

export const AnimalForm = (props) => {
    // Get the context from the LocationProvider
    const { locations, getLocations } = useContext(LocationContext)
    const { addAnimal } = useContext(AnimalContext)

    // Need useRefs for input fields
    const name = useRef(null)
    const breed = useRef(null)
    const location = useRef(null)
    // const customer = useRef(null)

    // Get the location state
    useEffect(() => {
        getLocations()
    }, [])

    const constructNewAppointment = () => {
        const locationId = parseInt(location.current.value)
        // const customerId = parseInt(customer.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                breed: breed.current.value,
                locationId,
                // customerId
            })
            .then(() => props.history.push("/animals"))
        }
    }

    // Need inputs for name, breed, location (dropdown)
    return (
        <form className="animalForm">
            <h3>Animal Form</h3>
            <fieldset>
                <input type="text" id="animalName" ref={name} placeholder="Animal name" />
            </fieldset>
            <fieldset>
                <input type="text" id="animalBreed" ref={breed} placeholder="Animal breed" />
            </fieldset>
            <fieldset>
                <select defaultValue="" name="location" id="animalLocation" ref={location}>
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAppointment()
                }}            
                className="btn btn-primary">
                    Make Appointment
                </button>
        </form>
    )
}