import React from 'react';
import { connect } from 'react-redux';

const ShoppingCartTable = ({ items, total, onIncreace, onDecreace, onDelete }) => {


    let itemsElements = items.map((item, index) => {
        return (<tr>
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

const mapDispatchToProps = () => {  //ТУТ МЫ ПОКА ЧТО НЕ ИСПОЛЬЗУЕМ dispatch Т.Е. ДАННЫЕ НЕ БУДУТ ИЗМЕНЯТЬСЯ В СТОР, НО В ПРОПС КОМПОНЕНТА ТЕСТОВЫЕ ФУНКЦИИ БУДУТ ДОБВЛЕНЫ
    return {
        onIncreace: (id) => alert('onIncreace ' + id),
        onDecreace: (id) => alert('onDecreace ' + id),
        onDelete: (id) => alert('onDelete ' + id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)