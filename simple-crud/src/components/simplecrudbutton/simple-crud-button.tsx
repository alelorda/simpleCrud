import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function SimpleCrudButton() {
    return (
        <div >
            <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={() => { console.log('Edit') }}
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
        </div >
    );
}

export default SimpleCrudButton;
