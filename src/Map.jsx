import React from 'react'
const MapMethort = [
    {
        id: 1,
        name: "rajveer"
    },
    {
        id: 3,
        name: "rajveer"
    }, {
        id: 2,
        name: "rajveer"
    }
]

const Map = () => {
    const handelclick = (ids) => {
        const handelDelete = MapMethort.filter((id) => {
            console.log(id);
            return id !== ids
        })
        console.log(handelDelete);
    }
    return (
        <>
            {
                MapMethort.map((event) => (
                    <>
                        <tr>
                            <td>{event.id}</td>
                            <td>{event.name}</td>
                        </tr>
                    </>
                ))
            }
            {
                MapMethort.map((event) => {
                    return (
                        <>
                            <tr>

                                <td>{event.id}</td>
                                <td>{event.name}</td>
                                <button onClick={() => handelclick(event.id)}>click</button>
                            </tr>

                        </>
                    )
                })
            }

        </>
    )
}

export default Map
