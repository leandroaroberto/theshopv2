import React from 'react'

const Category = ({id, nome,slug, foto, descricao}) => {
    return (
        <div className="category" key={id}>            
            <div className="category-image">                
                <a href={`#?=${slug}`}>{nome ? nome : 'No Category'}</a>
            </div>
        </div> 
    )
}

export default Category;