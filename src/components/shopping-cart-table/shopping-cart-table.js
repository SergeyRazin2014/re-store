import React from 'react';

const ShoppingCartTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Some books title</td>
                        <td>4</td>
                        <td>$40</td>
                        <td>
                            <button>добавить</button>
                            <button>удалить</button>
                            <button>отменить</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div>
                Total: $201
            </div>

        </div>
    )
}


export default ShoppingCartTable