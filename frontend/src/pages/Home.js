import React, {useState, useEffect} from 'react';

import Header from '../components/Header'
import Box from '../components/Box'
import Category from '../components/Category'

import axios from 'axios'

function Home({lang}) {

  const [prods, setProds] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/")
      .then((response) => {
        setProds(response.data);
    });
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8000/api/categories/")
      .then((response) => {
        setCategories(response.data);        
    });
  }, [])

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