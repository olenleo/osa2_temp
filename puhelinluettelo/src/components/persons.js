import React from 'react'
import Person from './person.js'

const Persons = ({ persons }) => {
    return (
        persons.map(person => (
            <Person key={person.name}
                person={person.name + '-' + person.number} />

        ))
    )
}





export default Persons