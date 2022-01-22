import React from 'react'

const Category = ({lang, id, nomeBr, nomeUs, slug, foto, descricaoBr, descricaoUs}) => {
    return (
        <div className="category" key={id}>            
            <div className="category-image">                
                {
                    lang == 'BR' ? 
                        <a href={`/${slug}`}>{nomeBr ? nomeBr : 'Sem Categoria'}</a> :
                        <a href={`/${slug}`}>{nomeUs ? nomeUs : 'No Category'}</a>
                }                
            </div>
        </div> 
    )
}

export default Category;