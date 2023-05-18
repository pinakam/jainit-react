import React from 'react'

const Object = () => {
  const userData = {
    "id": 1,
    "firstName": "rajveer",
    "lastName": "veer",
    "age": 56,
    "city": "S.nagar"
  }
  //  userData destructuring
  const { firstName, lastName, city } = userData

  return (
    <div>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{city}</h2>
    </div>
  )
}

export default Object
