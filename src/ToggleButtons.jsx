import React, { useState } from 'react'

const ToggleButton = () => {
    const [isToggleColor, setisToggleColor] = useState(false)

    const handleClick = () => {
        setisToggleColor(!isToggleColor)
    }
    return (
        <div>
            <button
                style={
                    {
                        backgroundColor: isToggleColor ? "pink" : "green"
                    }
                }
                onClick={handleClick}
            >
                Click
            </button>
        </div>
    )
}

export default ToggleButton
