import React from 'react'

const Category = ({categoryName}) => {
    return (
        <div className="category">            
            <div className="category-image">                
                <a href="#">{categoryName ? categoryName : 'No Category'}</a>
            </div>
        </div> 
    )
}

export default Category;