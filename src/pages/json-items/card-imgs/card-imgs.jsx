import React from 'react'
import { JSON } from '../json-data/ProductJson ';
const MapMethord = () => {
    const product = JSON.products
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {
                        product.map((e) => ((
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
                        )))
                    }
                </div>
            </div >
        </>
    )
}

export default MapMethord
