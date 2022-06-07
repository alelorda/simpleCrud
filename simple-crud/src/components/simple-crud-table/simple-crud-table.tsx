import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SimpleCrudButton from '../simplecrudbutton/simple-crud-button';
import './simple-crud-table.css'

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const items = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
    return (
        <div  >
            <TableContainer>
                <Table size="small" aria-label="a dense table" >
                    <TableHead  >
                        <TableRow >
                            <TableCell style={{ color: "white" }} align="center">Surname </TableCell>
                            <TableCell style={{ color: "white" }} align="center">Name</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Fat</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Addres</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Protein</TableCell>
                            <TableCell style={{ color: "white" }} align="center">Accion</TableCell>
                        </TableRow >
                    </TableHead >
                    <TableBody >

                        {items.map((item) => (

                            <TableRow className="tableCell"
                                key={item.name}
                            >
                                <TableCell style={{ color: "white" }} align="center"> {item.name} </TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.calories}</TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.fat}</TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.carbs}</TableCell>
                                <TableCell style={{ color: "white" }} align="center">{item.protein}</TableCell>
                                <TableCell style={{ color: "white" }} align="center"><SimpleCrudButton /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table >
            </TableContainer >
        </div >
    );
}