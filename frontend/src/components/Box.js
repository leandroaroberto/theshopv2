import React from 'react'

const Box = ({id, nome, caracteristicas, qtde, preco, fotoDestacada}) => {
    if (nome.length > 25){
        nome = nome.substring(0,25) + '...'
    }
    if (caracteristicas.length > 80){
        caracteristicas = caracteristicas.substring(0,80) + '...'
    }

    return (
       <div className="box" key={id}>
            <h4>{nome}</h4>
            <div className="box-image">
                <a href={`#?id=${id}`}><img src={`img/${id}/${fotoDestacada}`} /></a>
            </div>
            <p>
                {caracteristicas ? caracteristicas : '-' }
            </p>
            <p className="price">
              R$ {preco}
            </p>
        </div>         
    )
}

export default Box;