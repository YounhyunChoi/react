import React, {useState, userMemo} from 'react'

export default function Factory() {
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    const makeShip = () => setShipCnt(shipCnt + 1)

    let porductCnt = carCnt + shipCnt

    return (
        <>
            <h1>{porductCnt}</h1>
            <hr/>
            <Car make={makeCar}/>{' '}
            <Ship make={makeShip}/>
        </>
    )
}

function Car({make}) {
    console.log('car')
    return <button onClick={make}>car</button>
}

function Ship({make}) {
    console.log('ship')
    return <button onClick={make}>ship</button>
}