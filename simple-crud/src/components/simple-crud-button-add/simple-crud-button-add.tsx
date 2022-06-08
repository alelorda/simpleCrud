import Button from '@mui/material/Button';

export default function SimpleCrudButtonAd() {
    return (
        <div>
            <Button
                variant="contained"
                color="success"
                onClick={() => { console.log('ADD') }}
            >
                Add
            </Button>
        </div>
    )
};