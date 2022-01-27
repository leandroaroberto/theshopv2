import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContentDialog({prodIdSelected, prods, handleClose, open, lang}) { 
  const selectedProd = prods.filter((prod) => prod.id == prodIdSelected)
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  
  useEffect(() => {      
    if (lang == 'BR'){
      setNome(selectedProd.length > 0 ? selectedProd[0].nomeBr : '')
      setDescricao(selectedProd.length > 0 ? selectedProd[0].caracteristicasBr : '')             
    }
    else
    {      
      setNome(selectedProd.length > 0 ? selectedProd[0].nomeUs : '')
      setDescricao(selectedProd.length > 0 ? selectedProd[0].caracteristicasUs : '')
    }    
  }, [selectedProd])
  
  
  return (
    <div>      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {nome}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {descricao}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {lang == 'BR' ? 'Fechar' : 'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
