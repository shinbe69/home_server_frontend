import './Card.css'

export default function Card({ props }) {
    return (
        <div className="card">
            <h1 style={{ fontWeight: 'normal' }}>{ props.title }</h1>
            <div className='separator' />
            <h1 style={{ fontSize: '4em' }}>{ props.value }</h1>
        </div>
    )
}