import React from 'react';

const TableItem = ({ product, price }) => {
    return (
        <React.Fragment>
            <td>{product}</td>
            <td>{price}</td>
        </React.Fragment>
    );
};

export default TableItem;
