import React from 'react';

import Header from '../components/Header'
import Box from '../components/Box'
import Category from '../components/Category'

function Home({lang}) {

  //const [prods, setProds] = useState([])

  const prods = [
    { id : 1, 
      nome : 'Cadeira de escritório', 
      caracteristicas : 'Cadeira de escritório premium com encosto duplo', 
      qtde : 2, 
      preco : 1052.50, 
      fotoDestacada : 'cadeira.jpg', 
      status : 1,
      created_at : '2022-01-19 16:42:00',
      updated_at : ''
    },
    { id : 2, 
      nome : 'Cadeira gamer', 
      caracteristicas : 'Cadeira de escritório premium gamer', 
      qtde : 1, 
      preco : 2000.00, 
      fotoDestacada : 'portaRetrato.jpg', 
      status : 1,
      created_at : '2022-01-19 16:42:00',
      updated_at : ''
    },
    { id : 3, 
      nome : 'Conjunto com 2 Cadeiras Gamer Premium Branca Base Madeira', 
      caracteristicas : 'Altura 81 cm Largura 46 cm Profundidade 51 cm; Altura do assento ao chão 44 cm', 
      qtde : 20, 
      preco : 289.99, 
      fotoDestacada : 'poltrona3.jpg', 
      status : 1,
      created_at : '2022-01-19 16:42:00',
      updated_at : ''
    },    
  ]

  const categories = [
    {
      id : 1,
      nome: 'Decoração',
      slug: 'decoracao',
      foto: 'nopic.jpg',
      descricao: 'Temos todos os móveis que você precisa para decorar sua casa, do jeito que você sempre sonhou.',
      status: 1,
      created_at : '2022-01-19 17:42:00' ,
      updated_at : ''
    },
    {
      id : 2,
      nome: 'Móveis',
      slug: 'moveis',
      foto: 'nopic.jpg',
      descricao: 'Oferecer móveis lindos para deixar seu cantinho cheio de bons momentos!',
      status: 1,
      created_at : '2022-01-19 17:42:00' ,
      updated_at : ''
    }
  ]

  return (
    <>     
      <Header lang={lang}/>
      <section className="categories">
        <div className="container">
          {
            categories.map((cat) =>(
              <Category 
                key={cat.id}
                id={cat.id}
                slug={cat.slug}
                nome={cat.nome}
                descricao={cat.descricao}
                foto={cat.foto}
              />
            ) )
          }
        </div>
      </section>
      <section className="boxes">
        <div className="container">
          {
            prods.map((prod) => 
              <Box key={prod.id} 
                id={prod.id} 
                nome={prod.nome} 
                caracteristicas={prod.caracteristicas} 
                qtde={prod.qtde} 
                preco={prod.preco} 
                fotoDestacada={prod.fotoDestacada}                
              />    
            )
          }
        </div>
      </section>
    </>
  );
}

export default Home;