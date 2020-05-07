import React from 'react';
import TableItem from './TableItem';

const Table = () => {
    const items = [
        {
            id: 0,
            product: 'Laptop',
            price: '$800',
        },
        {
            id: 1,
            product: 'Desktop',
            price: '$1000',
        },
        {
            id: 2,
            product: 'Phone',
            price: '$300',
        },
    ];

    return (
        <table>
            <tr>
                <th>Product</th>
                <th>Price</th>
            </tr>
            {items.map(item => (
                <tr>
                    <TableItem key={item.id} product={item.product} price={item.price} />
                </tr>
            ))}
        </table>
    );
};

export default Table;
