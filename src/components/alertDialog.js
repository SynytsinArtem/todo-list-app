import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const AlertDialog = ({ isOpen, title, contentText, onClose, onAgree, onDisagree }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{contentText}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onDisagree}>Disagree</Button>
      <Button onClick={onAgree} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

export default React.memo(AlertDialog);
