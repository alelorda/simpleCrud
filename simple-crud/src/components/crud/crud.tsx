import { AddItem } from '../add-item/add-item';
import SimpleCrudButtonAd from '../simple-crud-button-add/simple-crud-button-add';
import DenseTable from '../simple-crud-table/simple-crud-table';

function Crud() {
    return (
        <div >
            <h1>
                Simple Crud
            </h1>
            <DenseTable />
            <AddItem />
        </div >
    );
}

export default Crud;
