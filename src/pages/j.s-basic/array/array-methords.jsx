import React from 'react'
import { isUserArray } from '../../../services/json-data/dynamic-arrays'
const ArrayMethords = () => {
    const handelDelete = (id) => {
        const filterArray = isUserArray.filter((item) => {
            return id !== item
        })
    }
    return (
        <>
            {
                isUserArray.map((event) => (
                    <tr>
                        <td key={event.id}>{event.id}</td>
                        <td>{event.name}</td>
                    </tr>
                ))
            }
            {/* return is declared below */}
            {
                isUserArray.map((event) => {
                    return (
                        <tr>
                            <td key={event.id}>{event.id}</td>
                            <td>{event.name}</td>
                            <button onClick={() => handelDelete(event.id)}>click</button>
                        </tr>
                    )
                })
            }

        </>
    )
}

export default ArrayMethords
