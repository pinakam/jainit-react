import React from 'react'

const ClassConstructor = () => {

    class userData {
        constructor(name, age) {
            this.userName = name
            this.userAge = age
        }
    }
    const user = new userData("rajveer", 20 + "years")
    return (
        <div>
            {user.userName}
            {user.userAge}
        </div>
    )
}
export default ClassConstructor
