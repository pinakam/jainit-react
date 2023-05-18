import React, { useState } from 'react'
import { CountryData } from '../json-data/ProductJson '

const SelectCountary = () => {
    const [country, setCountry] = useState(1)
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    const Data = CountryData
    const handleCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleState = (e) => {
        setState(e.target.value)
    }
    return (
        <div>
            <div className="row mt-4">
                <div class="col-md-3">
                    <select class="form-select" id="validationCustom04" onChange={(e) => handleCountry(e)}>
                        {
                            Data.map((data) => {
                                return (
                                    data.parent == 0 &&
                                    <>
                                        <option value={data.id} key={data.parent}>{data.name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row mt-4">
                <div class="col-md-3">
                    <select class="form-select" id="validationCustom04" onChange={(e) => handleState(e)}>
                        {
                            Data.map((data) => {
                                return (
                                    data.parent == country &&
                                    <>
                                        <option value={data.id} key={data.parent}>{data.name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row mt-4">
                <div class="col-md-3">
                    <select class="form-select" id="validationCustom04" onChange={(e) => handleState(e)}>
                        {
                            state !== "" &&
                            Data.map((data) => {
                                return (
                                    data.parent == state &&
                                    <>
                                        <option value={data.id} key={data.parent}>{data.name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
            </div>


        </div>
    )
}

export default SelectCountary
