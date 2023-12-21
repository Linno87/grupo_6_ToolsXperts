import { useEffect, useState } from "react";
import { getBrands } from "../services/products";
import { ContentRowItemBrand } from "./ContentRowItemGenre";

export const BrandsInDb = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            const result = await getBrands();
            setBrands(result.data);
        };
        fetchBrands();
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Nuestras marcas</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {brands.map((brand, index) => (
                            <ContentRowItemBrand key={index} brandName={brand.name} brandId={brand.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
