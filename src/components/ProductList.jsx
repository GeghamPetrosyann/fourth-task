import React from 'react'
import Product from './Product'

export default function ProductList({ items, onMove }) {
    return <div className='col-md-7'>
        <div className='row'>
            {
                items.map(elm => <Product key={elm.id} {...elm} onMove={onMove} />)
            }
        </div>
    </div>
}
