import React, { forwardRef, ReactElement, Ref, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { TransitionProps } from '@mui/material/transitions';
import SimpleCrudButtonAd from '../simple-crud-button-add/simple-crud-button-add';
import { AddItemForm } from '../add-item-form/add-item-form';
import { DialogTitle, Slide } from '@mui/material';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const AddItem = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <SimpleCrudButtonAd
                handleClickOpen={handleClickOpen}
            />
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
                <AddItemForm />
                <DialogActions>
                    <Button onClick={handleClose}>Agree</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}