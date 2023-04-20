import React from 'react'

const Inheritance = () => {
    class newCar {
        constructor() {
            this.carBrand = "BMW"
            this.carAge = "6 months"
        }
    }
    class oldCar {
        constructor() {
            this.carBrand = "Tata Nexon"
            this.carAge = 10
        }
    }
    const newCars = new newCar()
    const oldCars = new oldCar()
    return (
        <div>
            {newCars.carBrand}
            {oldCars.carAge}
        </div>
    )
}

export default Inheritance
