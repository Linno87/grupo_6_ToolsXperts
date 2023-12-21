import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export const ProductModal = ({ show, handleClose, product: { name, price, discount, brand, category } }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Precio: ${price}</p>
        <p>Descuento: {discount}%</p>
        <p>Marca: {brand?.name}</p>
        <p>Categoría: {category?.name}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

ProductModal.propTypes = {
    show: PropTypes.func,
    handleClose: PropTypes.func,
    product: PropTypes.object
  };