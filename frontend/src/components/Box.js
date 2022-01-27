import React from 'react'

const Box = ({id, nomeBr, nomeUs, caracteristicasBr, caracteristicasUs, qtde, preco, fotoDestacada, lang, handleClickOpen, handleClose, open}) => {
    let caracteristicas = '-'
    let nome = ''

    if (lang == 'BR') {
        if (nomeBr.length > 25)
            nome = nomeBr.substring(0,25) + '...'        
        else
            nome = nomeBr
        if (caracteristicasBr.length > 80)
            caracteristicas = caracteristicasBr.substring(0,80) + '...'
        else
            caracteristicas = caracteristicasBr
    }
    else
    {
       if (nomeUs.length > 25)
            nome = nomeUs.substring(0,25) + '...'
        else
            nome = nomeUs
        if (caracteristicasUs.length > 80)
            caracteristicas = caracteristicasUs.substring(0,80) + '...'
        else
            caracteristicas = caracteristicasUs        
    }

    const handleContentDialogOpen = (e) => {
        e.preventDefault()
        handleClickOpen(id)
    }

    return (
       <div className="box" key={id}>           
            <h4>{nome}</h4>
            <div className="box-image">
                <a href={`/product/${id}`}><img src={`img/${id}/${fotoDestacada}`} onClick={handleContentDialogOpen}/></a>
            </div>
            <p>
                {caracteristicas}
            </p>
            <p className="price">
              R$ {preco}
            </p>
        </div>         
    )
}

export default Box;