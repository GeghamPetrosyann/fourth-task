import React from 'react'

export default function Product({ id, name, price, photo, onMove }) {
    return <div key={id} className='col-md-4'>
        <img
            src={photo}
            style={{ width: 200, height: 200, objectFit: "cover" }}
        />
        <p>{name}</p>
        <p><strong>{price}$</strong></p>
        <button className='btn btn-outline-dark' onClick={() => onMove(id)}>move</button>

    </div>
}
