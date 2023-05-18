import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AmazonTshirtJSON } from '../json-data/ProductJson ';


const AboutTshirt = () => {
    const [selectUser, setSelectUser] = useState("")
    let param = useParams()
    // {}
    const black = (e) => {
        setSelectUser(e)
    }
    console.log("paramHook", param);
    const amzonData = AmazonTshirtJSON
    console.log("AmzonData", amzonData);
    const strike = ["L", "XL", "XXL", "XXXL"]
    return (
        <div>
            <>

                {
                    amzonData.map((data) => {
                        return (
                            param.id == data.id &&
                            <>
                                {console.log("mapData", data)}
                                <div class="card mb-3" style={{ maxWidth: "600px" }}>
                                    <div className="row">
                                        <div className="col-6">

                                            {
                                                selectUser == "" ?
                                                    <>
                                                        <img src={data.varition[0].image} class="card-img-top" alt="..." width={100} />
                                                        <h4 className='h4 mt-3 ms-2'> Price <i class="bi bi-currency-rupee mt-5"></i>{data.varition[0].price} </h4>
                                                        <h3 className='h3 ms-2 ' style={{ color: "red" }}>{data.varition[0].discountPercentage}%OFF</h3>

                                                    </>
                                                    :
                                                    data.varition?.map((img) => (
                                                        selectUser == img.color &&
                                                        <>
                                                            <img src={img.image} class="card-img-top" alt="..." width={10} />
                                                            <hr />
                                                            <h5 class="card-title">{img.ProductTitle}</h5>
                                                            <h4> Price <i class="bi bi-currency-rupee"></i>{img.price} </h4>
                                                            <h3 className='h3' style={{ color: "red" }}>{img.discountPercentage}%OFF</h3>
                                                            <div class="col-md-9 ms-2 mt-4" style={{ border: "1px solid black" }} >
                                                                <b for="validationCustom04" class="form-label ms-2">Size</b><br />
                                                                {      // console.log(size)
                                                                    strike.map((strick) => (
                                                                        img.size.map((size) => (
                                                                            // console.log(size == strick)
                                                                            size == strick ?
                                                                                <button className="btn btn me-2" style={{ border: "1px solid red" }}> {size}</button>
                                                                                :
                                                                                <button className="btn btn disabled me-1 mb-2" style={{ textDecoration: 'line-through' }}>{strick}</button>
                                                                        ))
                                                                    ))
                                                                }
                                                            </div >
                                                        </>
                                                    ))
                                            }
                                        </div>
                                        <div className="col-6 mt-5">                                        <div class="col-md-12">
                                            <div class="card-body">
                                                <div className="col-6 mb-3">
                                                    {
                                                        data.rating
                                                    }
                                                    {
                                                        [...Array(data.rating)].map((star) => {
                                                            return (
                                                                <i class="bi bi-star-fill" style={{ color: "orange" }}>{star}</i>
                                                            );
                                                        })
                                                    }
                                                    {[...Array(5 - data.rating)].map((star) => {
                                                        return (
                                                            <i class="bi bi-star" style={{ color: "orange" }} >{star}</i>
                                                        );
                                                    })}
                                                </div>
                                                <h5 class="card-title">{data.ProductTitle
                                                }</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                <br />
                                                {data.varition?.map((img) => (
                                                    <img src={img.image} alt="" width={70} onMouseOver={(e) => black(img.color)} />
                                                ))}
                                            </div>
                                        </div>

                                        </div>
                                    </div>

                                </div >


                            </>
                        )
                    })
                }
            </>
        </div >
    )
}

export default AboutTshirt
