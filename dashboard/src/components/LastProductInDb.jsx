import { useEffect, useState } from 'react';
import { getProducts } from '../services/products';

export const LastProductInDb = () => {
    const [lastProduct, setLastProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            if (products.ok) {
                setLastProduct(products.data[products.data.length - 1]);
            }
        };

        fetchProducts();
    }, []);

    if (!lastProduct) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" width="50%;" src={lastProduct.image} alt={lastProduct.name} />
                    </div>
                    <p>{lastProduct.description}</p>
                    <a className="btn btn-danger" rel="nofollow" href={`http://localhost:3000/products/detalle/${lastProduct.id}`}>Ver detalles del producto</a>
                </div>
            </div>
        </div>
    );
};
