export const cucu = "cucu"


type GarageType = {
    addCar: (car: { model: string }) => void
    logAllCarsNames: () => void
    getAllCars: () => { model: string }[]
}


let createGarage = (): GarageType => {
    let _cars: { model: string }[] = []
    return {
        addCar(car: { model: string }) {
            _cars.push(car)
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model))
        },
        getAllCars() {
            return _cars;
        }

    }
}