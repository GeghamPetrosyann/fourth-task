import React from 'react'

export default function Basket({ cart, onAdd, onReduce, onDelete }) {
    return <div className='col-md-5'>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(elm => <tr key={elm.id}>
                        <td>{elm.name}</td>
                        <td>{elm.price}$</td>
                        <td>{elm.count}</td>
                        <td>{elm.price * elm.count}$</td>
                        <td width={200}>
                            <button className='makeOrange' onClick={() => onAdd(elm.id)}>+</button>

                            <button className='makeOrange' onClick={() => onReduce(elm.id)}>-</button>

                            <button className='makeOrange' onClick={() => onDelete(elm.id)}>X</button>
                        </td>
                    </tr>)
                }
                <tr>
                </tr>
            </tbody>
        </table>
    </div>
}
