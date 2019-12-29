
import React, { useState } from 'react'
import Person from "./components/person"

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
    const [newName, setNewName] = useState(' ')


    const rows = () => persons.map(person =>
        <Person
            key={person.name}
            name={person.name}
        />
    )

    const handlePersonChange = (event) => {

        console.log(event.target.value)
        setNewName(event.target.value)
    }


    const addNewPerson = (event) => {
        event.preventDefault()
        const NewPersonObject = {
            name: newName
        }
        setPersons(persons.concat(NewPersonObject))
        setNewName('')
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNewPerson}>
                <input
                    value={newName}
                    onChange={handlePersonChange}
                />
                <button type="submit">add</button>

            </form>
            <h2>Numbers</h2>
            {rows()}
        </div>
    )

}

export default App


/*

import React, { useState } from 'react'
import Person from './components/person'


const App = (props) => {



    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')


    const rows = () => persons.map(person =>
        <Person key={persons.id}
        name={person.name}/>
    )
    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {rows()}
        </div>
    )

}

export default App

*/