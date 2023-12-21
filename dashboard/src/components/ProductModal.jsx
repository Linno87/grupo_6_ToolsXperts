import { Col, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const ProductModal = ({ show, handleClose, product}) => {
  console.log(product);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{product.data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
          <Col md={6}>
            <p>Precio: ${product.data.price}</p>
            <p>Descuento: {product.data.discount}%</p>
            <p>Marca: {product.data.brand?.name}</p>
            <p>Categoría: {product.data.category?.name}</p>
          </Col>
          <Col md={6}>
            <img src={product.data.image} alt={product.data.name} style={{maxWidth: '100%'}}/>
          </Col>
        </Row>
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
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    product: PropTypes.object
  };