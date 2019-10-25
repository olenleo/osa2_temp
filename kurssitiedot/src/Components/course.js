import React from 'react'

const Courses = ({ courses }) => {

    console.log('Kaikki kurssit', courses)
    return (
        <div>
            {courses.map(course => (
                <Course key={course.name} course={course} />
            ))}
        </div>
    )
}

const Course = ({ course }) => {
    console.log('Tästä yhen kurssin sisältö: ', course)
    
    return (
        <div>
            <h2>{course.name}</h2>
            {course.parts.map(parts => 
            
            <p key={parts.id}> {parts.name} tehtäviä: {parts.exercises} </p>)}
            <p>Yhteensä: {course.parts.reduce((sum, {exercises}) => sum + exercises,0)   } tehtävää </p>
        </div>
    )
}




export default Courses