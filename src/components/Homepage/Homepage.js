import { useEffect, useState } from 'react'
import Card from './Card'
import './Homepage.css'

export default function Homepage() {
    const [gas, setGas] = useState(0)
    const [temperature, setTemperature] = useState(0)

    useEffect(() => {
        fetch('/data')
        .then(res => res.json())
        .then((data) => {
            setGas(data.gas)
            setTemperature(data.temperature)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div id='homepage'>
            <Card props={{title: 'Khí gas', value: gas}} />
            <Card props={{title: 'Nhiệt độ', value: temperature}} />
        </div>
    )
}