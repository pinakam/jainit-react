import React, { useState } from 'react'
const instialCategory = [{ name: "Apple", price: 1200, discount: "99%" },
{ name: "I-watch", price: 1200, discount: "99%" }]
const UseState = () => {
  const [product, setProduct] = useState(instialCategory)
  return (
    <>
      {/* instionalCategory as object
      {/* <h1>{product[0].name}</h1> */}
      {/* <h1>{product}</h1> */}
      {/* instionalCategory as an arrray  */}
      {product[0].name}
      {product[0].price}
      {product[0].discount}
      {product[0].name ? product[0].name : product}
      <button onClick={(e) => {
        setProduct(product[1].name)
      }}> click</button>
    </>
  )
}

export default UseState
