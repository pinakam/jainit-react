import React, { useState, useEffect } from 'react'
import { products } from '../json-data/product-json '
import { JSON } from '../json-data/product-json ';

const json = products
console.log(json);
const CaroselImg = () => {
    const [trues, setTrues] = useState(false)
    const handleClick = () => {
        setTrues(true)
    }

    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <>
                    {json.map((data, i) => {
                        return (
                            i < 1 ?
                                <div class={"carousel-item active"}>
                                    <div className="row">
                                        {json.map((data, i) => (
                                            i < 3 &&
                                            <div className="col-4" style={{ width: "350px" }}>
                                                <div class="card">
                                                    <img src={data.thumbnail} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{data.title}</h5>
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div>
                                :
                                <div class={"carousel-item"}>
                                    <div className="row">
                                        {json.map((data, i) => {
                                            return (
                                                i > 2 &&
                                                <div className="col-4">
                                                    <div class="card">
                                                        <img src={data.thumbnail} class="card-img-top" alt="..." />
                                                        <div class="card-body">
                                                            <h5 class="card-title">Card title</h5>
                                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                        )
                    })
                    }
                </>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden" onClick={handleClick}>Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden" onClick={handleClick} >Next</span>
            </button>
        </div >
    )
}

export default CaroselImg
