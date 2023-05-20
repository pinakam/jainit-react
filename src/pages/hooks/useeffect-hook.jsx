import React, { useEffect, useState } from 'react'

const instational = { name: "rajveer" }
const UseEffects = () => {
    const [data, setData] = useState(instational)
    useEffect(() => {
        setTimeout(() => {
            alert("good Afternoon", setData({ name: "veer" }))
        }, 2000);
        setData(instational)
    }, [])
    return (
        <div>
            {data.name}
        </div>
    )
}

export default UseEffects
