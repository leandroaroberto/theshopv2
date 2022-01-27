import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContentDialog({prodIdSelected, prods, handleClose, open, lang}) {
  
  const selectedProd = prods.filter((prod) => prod.id == prodIdSelected)
  
  return (
    <div>      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {lang == 'BR' ? selectedProd[0].nomeBr : selectedProd[0].nomeUs}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {lang == 'BR' ? selectedProd[0].caracteristicasBr : selectedProd[0].caracteristicasUs}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            {lang == 'BR' ? 'Fechar' : 'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
