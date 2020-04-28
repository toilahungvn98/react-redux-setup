import React, { useEffect } from 'react'

const Home = ({ getProducts,products }) => {

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            { products.length > 0 && products.map( item => <div key={item.id}>{item.name}</div> ) }
        </div>
    )
}

export default Home
