import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions'

const ShoppingCartTable = ({ items, total, onIncreace, onDecreace, onDelete }) => {


    let itemsElements = items.map((item, index) => {
        return (<tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td>{item.total}</td>
            <td>
                <button onClick={() => onDecreace(item.id)} >-</button>
                <button onClick={() => onIncreace(item.id)} >+</button>
                <button onClick={() => onDelete(item.id)} >удалить</button>
            </td>
        </tr>
        )
    })

    return (
        <div>
            <h2>Your order</h2>
            <table border="1" cellSpacing="0" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsElements}
                </tbody>
            </table>

            <div>
                Total: $201
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
        total: state.orderTotal
    }
}

const mapDispatchToProps = {
    onIncreace: bookAddedToCart,
    onDecreace: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)