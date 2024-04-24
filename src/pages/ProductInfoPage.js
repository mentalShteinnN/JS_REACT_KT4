import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Stars from "../components/Stars"

function ProductInfoPage(){

    const {id} = useParams()
    const location = useLocation()
    console.log(location)
    const [product, setProduct] = useState({})
    const [rate, setRate] = useState([])

    useEffect(() => {
        if (location.state){
            setProduct(location.state)
            console.log(`STATE: ${location.state}`)
        }else{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res => res.json())
        .then(data => setProduct(data))
        }
    }, [id])

    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setRate(data))
    }, [])



    return(
        <div className="content">
            <div className="ProductInfo">
                <h2>{product.title}</h2>
                <img className="ProdImg" src={product.image}/>
                <p>Price: {product.price}$</p>
                <b>Category: {product.category}</b>
                <p>Description: {product.description}</p>
                <p>Rating: {product.rating?.rate}</p>
                <p><Stars rating={product.rating?.rate}/></p>
                <Link key={product.id} to={'/products'}>
                <p>НАЗАД В КАТАЛОГ</p>
                </Link>
            </div>
        </div>
    )
}

export default ProductInfoPage