import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";


export const AddItemForm = () => {
    return (
        <div>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
        </div >
    );
}