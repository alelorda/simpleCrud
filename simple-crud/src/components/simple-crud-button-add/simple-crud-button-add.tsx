import './simple-crud-button-add'
import Button from '@mui/material/Button';


export default function SimpleCrudButtonAd() {
    return (
        <div>
            <Button
                variant="contained"
                fullWidth
                size='large'
                color="success"
                style={{ marginBlockStart: 10 }}
                onClick={() => { console.log('ADD') }}
            >
                Add
            </Button >
        </div >
    )
};