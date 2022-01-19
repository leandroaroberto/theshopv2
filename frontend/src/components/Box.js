import React from 'react'

const Box = () => {
    return (
       <div className="box">
            <h2>Product 1</h2>
            <div className="box-image">
                <a href="#"><img src="img/1/cadeira.jpg" /></a>
            </div>
            <p>
                A more efficient way to lay out, align and distribute space among
                items in a container
            </p>
            <p className="price">
              R$ 99,99
            </p>
        </div>         
    )
}

export default Box;