import PropTypes from 'prop-types';

export const ModalDetailProduct = ({ product, show, handleClose }) => {
  if (!product) return null;

  const { id, name, description, price, image } = product;

  return (
    show && (
      <div className="modal fade show" id={`modalDetail${id}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="main-admin-header">
              <div className="modal-header main-admin-header">
                <h5 className="modal-title modal-advertencia" id="modalDetailLabel">
                  {name}
                </h5>
                <button type="button" className="btn btn-close btn-danger" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
            <div className="modal-body modal-body-background">
              <div className="row">
                <div className="col-12 col-md-4">
                  <img src={`/img/products/${image}`} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-8">
                  <h2>{description}</h2>
                  <p>${price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

ModalDetailProduct.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
    show: PropTypes.bool,
    handleClose: PropTypes.func,
  };