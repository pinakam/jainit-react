import React, { useState } from 'react'
import { products } from '../json-data/ProductJson '

const Images = () => {
    const [ClickedImage, setclickedImage] = useState(1)
    const handleClick = (e) => {
        setclickedImage(e)
    }
    const images = products
    return (
        <>
            {
                images.map((data) => {
                    return (
                        data.id == ClickedImage &&
                        <img src={data.thumbnail} alt=""  />
                    )
                })
            }
            <br />
            {
                images.map((data) => {
                    return (
                        <>
                            <img src={data.thumbnail} alt="" width={100} height={80} onClick={(e) => handleClick(data.id)} />
                        </>)
                })
            }
        </>)
}

export default Images
