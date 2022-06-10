import { Button, Dialog, DialogActions, DialogTitle, Slide } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import SimpleCrudButton from '../simplecrudbutton/simple-crud-button';

import './simple-crud-table.css'

function createData(
    id: number,
    surname: string,
    name: string,
    age: number,
    address: string,
    salary: number,
) {
    return {
        id, surname, name, age, address, salary
    };
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const items = [
    createData(1, 'Leclerc', 'Charles', 30, 'Miami 500', 4.0),
    createData(2, 'Verstapen', 'Max', 30, 'Miami 500', 4.0),
    createData(3, 'Perez', 'Checo', 30, 'Miami 500', 4.0),
    createData(4, 'Sainz', 'Carlos', 30, 'Miami 500', 4.0),
    createData(5, 'Hamilton', 'Lewis', 30, 'Miami 500', 4.0),
];

export default function DenseTable() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div  >
            <TableContainer>
                <Table size="small" aria-label="a dense table" >
                    <TableHead  >
                        <TableRow >
                            <TableCell style={{ color: "white" }} align="center">Surname </TableCell>
                            <TableCell style={{ color: "white" }} align="center">Name</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Age</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Address</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Salary</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Accion</TableCell>
                        </TableRow >
                    </TableHead >
                    <TableBody >
                        {items.map((item) => (
                            <TableRow className="tableCell"
                                key={item.id}
                            >
                                <TableCell style={{ color: "white" }} align="center"> {item.surname} </TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.name}</TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.age}</TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.address}</TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.salary}</TableCell>
                                <TableCell style={{ color: "white" }} align="center">
                                    <SimpleCrudButton
                                        handleClickOpen={handleClickOpen}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table >
            </TableContainer >
        </div >
    );
}