import './simple-crud-button-add'
import Button from '@mui/material/Button';

export interface SimpleCrudButtonAdProps {
    handleClickOpen?: () => void;
}

export default function SimpleCrudButtonAd({ handleClickOpen }: SimpleCrudButtonAdProps) {
    return (
        <div>
            <Button
                variant="contained"
                fullWidth
                size='large'
                color="success"
                style={{ marginBlockStart: 10 }}
                onClick={handleClickOpen}
            >
                Add
            </Button >
        </div >
    )
};