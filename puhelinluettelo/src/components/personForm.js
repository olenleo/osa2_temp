import React from 'react'


const PersonForm = ({ handlePersonChange, handleNumberChange, newName, newNumber, addNewPerson }) => {
    
    return (
        <form onSubmit={addNewPerson}>
            <div>Name:
        <input
                    value={newName}
                    onChange={handlePersonChange}
                />
            </div>
            <div> Number:
        <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />

            </div>
            <button type="submit">add</button>

        </form>
    )
}

export default PersonForm