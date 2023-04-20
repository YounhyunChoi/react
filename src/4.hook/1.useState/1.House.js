import {useState} from 'react'

export default function Main() {
    return (
        <>
            <LivingRoom/>{' '}
            <RestRoom/>{' '}
            <BedRoom/>
        </>
    )
}

function LivingRoom() {
    const [isLight, setIsLight] = useState(false)
    let roomName = '거실 '
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function RestRoom() {
    const [isLight, setIsLight] = useState(false)
    let roomName = '화장실 '
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function BedRoom() {
    const [isLight, setIsLight] = useState(false)
    let roomName = '침실 '
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}