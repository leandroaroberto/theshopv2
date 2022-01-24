import React, {useState, useEffect} from 'react';

import Header from '../components/Header'
import Box from '../components/Box'
import Category from '../components/Category'

import axios from 'axios'

function Home({lang}) {

  const [prods, setProds] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/")
      .then((response) => {
        setProds(response.data);
    });
  }, [])

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
      {categories.length > 0 ? (
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
      </section>)
      :
      ''
        }
      <section className="boxes">
        <div className="container">
        {
          prods.length > 0 ? 
          (  prods.map((prod) => 
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
          ) : lang == 'BR' ? 'Não existem produtos cadastrados.' : 'There are no products available.'
          }
          </div>
      </section>
    </>
  );
}

export default Home;