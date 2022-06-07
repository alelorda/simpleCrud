import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function SimpleCrudButton() {
    return (
        <div >
            <Button
                variant="contained"
                color="error"
                //className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                /*className={classes.button}*/
                startIcon={<SaveIcon />}
            >
                Edit
            </Button>
        </div >
    );
}

export default SimpleCrudButton;
