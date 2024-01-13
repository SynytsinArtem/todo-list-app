import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const AlertDialog = ({ isOpen, title, contentText, onClose, onAgree, onDisagree }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {contentText}
      </DialogContentText>
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
