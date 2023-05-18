import React, { useState, } from 'react'
import { AmazonTshirtJSON } from '../json-data/ProductJson '
import AboutTshirt from './AboutTshirt'
import { Link, useNavigate } from 'react-router-dom';

const AmazonTshirt = () => {
    const [selectUser, setSelectUser] = useState("")
    const [id, setId] = useState(2)
    let navigate = useNavigate();
    const amzonData = AmazonTshirtJSON
    const black = (e) => {
        setSelectUser(e)
    }
    const handleImg = (e) => {
        console.log("Img", e);
        setId(e)
        console.log("id", id);
        black()
        // navigate("/Tshirt")
    }
    <AboutTshirt id={id} />
    const strike = ["L", "XL", "XXL", "XXXL"]
    return (
        <>
            <div className="row">
                {
                    amzonData.map((product, i) => {
                        console.log("ProduxctsDAta", product)
                        return (
                            <div className="col-3 me-5 ms-2" >
                                <div class="card" style={{ width: "18rem" }}>
                                    <div class="card-body">
                                        {
                                            selectUser == "" ?
                                                <Link to={`/Tshirt/${product.id}`}>
                                                    <img src={product.varition[0].image} onClick={(e) => handleImg(product.id)} class="card-img-top" alt="..." />
                                                </Link>
                                                :
                                                product.varition?.map((img) => (
                                                    selectUser == img.color &&
                                                    <Link to={`/Tshirt/${product.id}`}>
                                                        <img src={img.image} class="card-img-top" alt="..." />
                                                    </Link>

                                                ))}
                                        <div className="row mt-4">
                                            <div className="col-6">
                                                <h4 class=" mx-auto">{product.ProductTitle}</h4>
                                            </div>

                                            <div className="col-6">
                                                {
                                                    product.rating
                                                }
                                                {
                                                    [...Array(product.rating)].map((star) => {
                                                        return (
                                                            <i class="bi bi-star-fill" style={{ color: "orange" }}>{star}</i>
                                                        );
                                                    })
                                                }
                                                {[...Array(5 - product.rating)].map((star) => {
                                                    return (
                                                        <i class="bi bi-star" style={{ color: "orange" }} >{star}</i>
                                                    );
                                                })}
                                            </div>
                                            <div className="col-6">
                                                <h4 style={{ color: "red" }} > Save {product.varition[0].discountPercentage}% </h4>
                                            </div>
                                        </div>
                                        {product.varition?.map((img) => (
                                            <Link to={`/Tshirt/${product.id}`}>
                                                <img src={img.image} alt="" width={80} onClick={(e) => black(img.color)} />
                                            </Link>
                                        ))}
                                    </div >
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default AmazonTshirt
