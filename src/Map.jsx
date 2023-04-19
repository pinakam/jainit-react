import React from 'react'
import Arrays from ".//Arrays.json"
const Map = () => {

    const handelclick = (ids) => {
        const handelDelete = Arrays.filter((id) => {
            console.log(id);
            return id !== ids
        })
        console.log("handle delete == ", handelDelete);
    }
    return (
        <>
            {
                Arrays.map((event) => (
                    <>
                        <tr>
                            <td>{event.id}</td>
                            <td>{event.name}</td>
                        </tr>
                    </>
                ))
            }
            {
                Arrays.map((event) => {
                    return (
                        <tr>
                            <td>{event.id}</td>
                            <td>{event.name}</td>
                            <button onClick={() => handelclick(event.id)}>click</button>
                        </tr>
                    )
                })
            }

        </>
    )
}

export default Map
