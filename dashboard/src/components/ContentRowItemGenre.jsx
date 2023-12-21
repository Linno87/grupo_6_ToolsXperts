import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const ContentRowItemBrand = ({ brandName, brandId }) => {
    return (
        <div className="col-lg-6 mb-4">
            <Link to={`http://localhost:3000/products?brand=${brandId}`}>
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        {brandName}
                    </div>
                </div>
            </Link>
        </div>
    )
}


ContentRowItemBrand.propTypes = {
    brandName: PropTypes.string,
    brandId: PropTypes.number
}