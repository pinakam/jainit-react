import React, { useState } from 'react'

const SpreadOperator = () => {
    const [Input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setInput({ ...Input, [e.target.name]: e.target.value })
    }
    return (
        <>
            <input type="text" value={Input.name} name='name' onChange={handleChange} />
            <input type="text" value={Input.email} name='email' onChange={handleChange} />
            <input type="text" value={Input.password} name='password' onChange={handleChange} />
        </>
    )
}

export default SpreadOperator
