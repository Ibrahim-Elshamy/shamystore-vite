import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition';
import Product from '../components/slideProducts/Product';
import SlideProductLoading from "../components/slideProducts/SlideProductLoading";

function SearchResult() {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchResults = async () =>{
      try{
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data  = await res.json()
        setResults(data.products || [])
      } catch(error) {
        console.log("Search Error: ", error);
        
      } finally {
        setLoading(false)
      }
    }
    if (query) fetchResults()
  }, [query])
  return (
    <PageTransition key={query}>
      <div className="category_products">
        {loading ? (
          <SlideProductLoading key={query} />
        ) : results.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>Results For : {query}</h2>
            </div>
            <div className="searchResult_products">
              {results.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          </div>
        ) : <div className='container'><p>No Results Found</p></div>
        }
      </div>
    </PageTransition>
  );
}

export default SearchResult
