import Head from 'next/head'
import { useState} from 'react'
import { getData } from '../utils/fetchData'
import ProductItem from '../components/product/ProductItem'

const Home = (props) => {
  const [products, setProducts] = useState(props.products)

  return(
    <div className="home_page">
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="products">
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product}  />
          ))
        }
      </div>
    </div>
  )
}


export async function getServerSideProps() {
 const res = await getData('product')

 console.log(res)
  return {
    props: {
      products: res.products,      
    }, 
  }
}

export default Home