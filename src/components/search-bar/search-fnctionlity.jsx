import React, { useState } from 'react'
import { JSON } from '../json-data/ProductJson ';

const SearchFunctionlity = () => {
    const [input, setInput] = useState("")
    const [defalutProduct, setDefalutProduct] = useState(false)
    const handleSearch = (e) => {
        setDefalutProduct(true)
        setInput(e.target.value)
    }
    const product = JSON.products
    console.log(product.filter(user => user.title.toLowerCase().includes("Samsung Universe 9")));
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" onChange={handleSearch} value={input} placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
            {/* Products page  */}
            <div className="container">
                <div className="row mt-5">
                    {
                        (
                            defalutProduct == true ?
                                product.filter((user) =>
                                    user.title.toLowerCase().includes(input) ||
                                    user.title.toUpperCase().includes(input)
                                ) : product).map((e) => ((
                                    <div className="col-md-4  mt-5" key={e.id} >
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
                                )))}
                </div>
            </div >

        </div >

    )
}

export default SearchFunctionlity
