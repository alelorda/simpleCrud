import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Dialog, DialogActions, DialogTitle, Slide } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import { AddItemForm } from '../add-item-form/add-item-form';
import './simple-crud-table.css'



export interface SimpleCrudButtonAdProps {
    handleClickOpen?: () => void;
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleCrudButton({ handleClickOpen }: SimpleCrudButtonAdProps) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleClickOpen}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => { console.log('Delete') }}
            >
                Delete
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogTitle
                    align="center"
                >
                    {"Add Item"}
                </DialogTitle>
                <AddItemForm
                    item={item} />
                <DialogActions>
                    <Button onClick={handleClose}>Agree</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div >

    );
}

export default SimpleCrudButton;
