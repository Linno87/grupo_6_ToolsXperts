import PropTypes from 'prop-types';

export const ContentRowItemBrand = ({brandName}) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {brandName}
                </div>
            </div>
        </div>
    )
}

ContentRowItemBrand.propTypes = {
    brandName: PropTypes.string,
}