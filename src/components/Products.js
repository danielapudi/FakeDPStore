import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const toggleProducts = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="products">
            {loading && (
                <div>
                    <h1>Cargando...</h1>
                </div>
            )}
            {data.slice(0, showAll ? data.length : 6).map((product) => (
                <div key={product.id} className="product-card">
                    <h6 className="title">{product.title}</h6>
                    <div>
                        <img src={product.image} alt="#" />
                    </div>
                    <div className="description">
                        <h6 className="price">{`$${product.price}`}</h6>                      
                    </div>
                    <Link to={`/product/${product.id}`}>Ver Detalles</Link>
                </div>
            ))}
            <button onClick={toggleProducts} className="button">
                {showAll ? 'Ver menos' : 'Ver todo'}
            </button>
        </div>
    );
};

export default Products;


