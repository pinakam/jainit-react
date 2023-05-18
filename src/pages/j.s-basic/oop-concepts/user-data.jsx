import React from 'react'

const Objects = () => {
    const userData = {
        "first Data": {
            id: 1,
            firstName: "rajveer",
            lastName: "shrimali",
            age: 25,
        },
        "second Data": {
            id: 2,
            firstName: "vinaya",
            lastName: "shri",
            age: 56,
        }
    }
    const firstUser = userData["first Data"]
    const secondUser = userData["second Data"]
    return (
        <ul>
            <li>{firstUser.firstName}</li>
            <li>{secondUser.lastName}</li>
            <li>{secondUser.age}</li>
        </ul>
    )
}

export default Objects
