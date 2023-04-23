import React, { useState, useEffect } from 'react'
import { JSON } from '../json-data/ProductJson '

const ItemData = () => {
    const [items, setItems] = useState([])
    const [product, setProduct] = useState([])
    const [defalutProduct, setDefalutProduct] = useState(false)

    useEffect(() => {
        let masterArray = JSON.products
        let masterArr = masterArray.map((items) => {
            return items.category
        })
        let getFilterArray = [...new Set(masterArr)]
        setItems(getFilterArray)
    }, [])
    let masterArray = JSON.products
    const handelDropdown = (i) => {
        setDefalutProduct(true)
        let masterArray = JSON.products
        let itemsData = masterArray.filter((val) => {
            return i.target.value == val.category
        })
        setProduct(itemsData)
    }
    return (
        <>
            <div class="col-md-5 mx-auto">
                <label for="validationCustom04" class="form-label"> All Catagery</label>
                <select class="form-select " id="validationCustom04" onChange={(e) => handelDropdown(e)}>
                    {
                        items.map((item) => {
                            return <option value={item} > {item}</option>
                        })
                    }
                </select>
            </div >

            <div className="container">
                <div className="row mt-5">
                    {
                        (defalutProduct == false ?
                            masterArray :
                            product)
                            .map((e) => ((
                                <div className="col-md-4  mt-5" >
                                    <div class="card" style={{ width: "21rem" }}>
                                        <div className="row">
                                            {
                                                e.images.map((imgs) => ((
                                                    <div className="col-6">
                                                        <img src={imgs} class="card-img-top d-flex" alt="..." style={{ width: "125px" }} />
                                                    </div>
                                                )))
                                            }

                                        </div>
                                        <div class="card-body">
                                            <h4>{e.brand}</h4>
                                            <h5 class="card-title">{e.title}</h5>
                                            <p class="card-text">{e.description}</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <h3 className='h4'> ${e.price}</h3>
                                                </div>
                                                <div className="col-6">
                                                    <button className='btn btn-secondary'>{e.stock} Avialable </button>

                                                </div>
                                                <div className="col-12">
                                                    <h4>  ({e.discountPercentage}% off)</h4>
                                                </div>
                                                <div className="col-6 mt-3">
                                                    <button className='btn btn-success'>{e.rating}*</button> Ratings
                                                </div>
                                                <div className="col-6 mt-3">
                                                    <button className='btn btn-danger'>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))
                    }
                </div>
            </div>
        </>
    )
}

export default ItemData
