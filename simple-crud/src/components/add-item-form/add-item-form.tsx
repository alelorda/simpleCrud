import DialogContent from "@mui/material/DialogContent";
import TextField from '@mui/material/TextField';
import { ISimpleCrudItem } from "../../models/isimple-crud-item";

interface AddItemFormProps {
    item?: ISimpleCrudItem;
}

export const AddItemForm = ({ item }: AddItemFormProps) => {

    return (
        <div>
            <DialogContent>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Surname"
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Name"
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Address"
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Salary"
                />
            </DialogContent>
        </div >
    );
}