import React, { useState } from 'react'
import { MenuData } from "../json-data/ProductJson "

const Navbar = () => {
    const [dropdown, setDropdown] = useState("")
    const menuData = MenuData
    const handelDropdown = (e) => {
        setDropdown(e.target.value)
    }
    return (
        <div>
            <div className="App">
                <button className='btn btn-success'></button>

                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">


                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">
                            {
                                menuData.menu.map((item) => {
                                    return (
                                        <ul key={item.link}>
                                            {
                                                item.sub == null ?
                                                    <a>{item.name}</a>
                                                    :
                                                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {item.name}
                                                        <ul class="dropdown-menu">
                                                            {item.sub.map((sub, i) => (
                                                                <li> <a class="dropdown-item" key={item.name}>{sub.name}</a></li>
                                                            ))
                                                            }
                                                        </ul>
                                                    </button>
                                            }
                                        </ul>
                                    )
                                })
                            }
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        ...
                    </div>
                </div>
                <div className="row mt-4">
                    <div class="col-md-3">
                        <select class="form-select" id="validationCustom04" onChange={(e) => handelDropdown(e)}>
                            {
                                menuData.menu.map((data) => {
                                    return (
                                        <>
                                            <option value={data.name} key={data.link}>{data.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" id="validationCustom04">
                            {
                                menuData.menu.map((data) => {
                                    return (
                                        <>
                                            {data.name == dropdown &&
                                                data.sub?.map((sub) => (
                                                    sub !== null ?
                                                        <option key={sub.link} value={sub.name}>{sub.name}</option>
                                                        :
                                                        <option>null</option>
                                                ))
                                            }
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Navbar
