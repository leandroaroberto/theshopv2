import React from 'react';

import Header from '../components/Header'
import Box from '../components/Box'
import Category from '../components/Category'

function Home({lang}) {

  //const [prods, setProds] = useState([])

  const prods = [
    { id : 1, 
      nomeBr : 'Cadeira de escritório', 
      nomeUs : 'Office chair', 
      caracteristicasBr : 'Cadeira de escritório premium com encosto duplo', 
      caracteristicasUs : 'Office chair premium edition ', 
      qtde : 2, 
      preco : 1052.50, 
      fotoDestacada : 'cadeira.jpg', 
      status : 1,
      created_at : '2022-01-19 16:42:00',
      updated_at : ''
    },
    { id : 2, 
      nomeBr : 'Cadeira gamer', 
      nomeUs : 'Gamer chair', 
      caracteristicasBr : 'Cadeira de escritório premium gamer', 
      caracteristicasUs : 'Game chair premium edition', 
      qtde : 1, 
      preco : 2000.00, 
      fotoDestacada : 'portaRetrato.jpg', 
      status : 1,
      created_at : '2022-01-19 16:42:00',
      updated_at : ''
    },
    { id : 3, 
      nomeBr : 'Conjunto com 2 Cadeiras Gamer Premium Branca Base Madeira', 
      nomeUs : 'Set of 2 Premium White Wood Base Gamer Chairs', 
      caracteristicasBr : 'Altura 81 cm Largura 46 cm Profundidade 51 cm; Altura do assento ao chão 44 cm', 
      caracteristicasUs : 'Height 81 cm Width 46 cm Depth 51 cm; Height from seat to floor 44 cm', 
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
      nomeBr: 'Decoração',
      nomeUs: 'Decoration',
      slug: 'decoration',
      foto: 'nopic.jpg',
      descricaoBr: 'Temos todos os móveis que você precisa para decorar sua casa, do jeito que você sempre sonhou.',
      descricaoUs: 'We have everthing to decorate your space!',
      status: 1,
      created_at : '2022-01-19 17:42:00' ,
      updated_at : ''
    },
    {
      id : 2,
      nomeBr: 'Móveis',
      nomeUs: 'Forniture',
      slug: 'forniture',
      foto: 'nopic.jpg',
      descricaoBr: 'Oferecer móveis lindos para deixar seu cantinho cheio de bons momentos!',
      descricaoUs: 'We have that furniture you always dreamed about!',
      status: 1,
      created_at : '2022-01-19 17:42:00' ,
      updated_at : ''
    }
  ]

  return (
    <>     
      <Header 
        lang={lang} 
        showSearch={true} 
        headerImage="packages.png"
        headerBr="Encontre seu produto"
        headerUs="Find your product"
      />
      <section className="categories">
        <div className="container">
          {
            categories.map((cat) =>(
              <Category 
                key={cat.id}
                id={cat.id}
                slug={cat.slug}
                nomeBr={cat.nomeBr}
                nomeUs={cat.nomeUs}
                descricaoBr={cat.descricaoBr}
                descricaoUs={cat.descricaoUs}
                foto={cat.foto}
                lang={lang}
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
                nomeBr={prod.nomeBr} 
                nomeUs={prod.nomeUs} 
                caracteristicasBr={prod.caracteristicasBr} 
                caracteristicasUs={prod.caracteristicasUs} 
                qtde={prod.qtde} 
                preco={prod.preco} 
                fotoDestacada={prod.fotoDestacada}
                lang={lang}                
              />    
            )
          }
        </div>
      </section>
    </>
  );
}

export default Home;