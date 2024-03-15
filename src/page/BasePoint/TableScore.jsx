import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import '../BasePoint/TableScore.module.css';
import { ScoreData } from '../BasePoint/ScoreData';
import { useEffect, useState } from 'react';
const TableScore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ScoreData.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Mã nghành"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
};

export default TableScore;
