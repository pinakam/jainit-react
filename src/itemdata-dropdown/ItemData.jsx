import React, { useState, useEffect } from 'react'
import { JSON } from '../json-data/ProductJson '

const ItemData = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        let masterArray = JSON.products
        let getFilterArray = []
        masterArray.map((items) => {
            let cat = masterArray.filter((category) => {
                console.log(items.category);
                return items.category == category.category
            })
            console.log(cat);
            setItems(cat)
        })
    }, [])



    return (
        <>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Catagery</label>
                <select class="form-select" id="validationCustom04">
                    {
                        items.map((item) => ((
                            <>
                                <option value={item.category}> {item.category}</option>
                            </>
                        )))
                    }
                </select>
            </div >
        </>
    )
}

export default ItemData
