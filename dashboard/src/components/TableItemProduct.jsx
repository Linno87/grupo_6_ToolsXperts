import PropTypes from "prop-types";
import { useState } from "react";
import { getProductDetails } from "../services/products";
import { ProductModal } from "./ProductModal";

export const TableItemProduct = ({ product: { id, name, price, discount, brand, category }, handleEditProduct, handleDeleteProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const handleShowModal = async () => {
    const details = await getProductDetails(id);
    setProductDetails(details);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>{discount}%</td>
      <td>{brand?.name}</td>
      <td>{category?.name}</td>
      <td>
        <div className="d-flex justify-content-around">
          <button className="btn btn-sm btn-primary mx-1" onClick={() => handleShowModal(id)}>
            <i className="fas fa-eye"></i>
          </button>
          <button className="btn btn-sm btn-success mx-1" onClick={() => handleEditProduct(id)}>
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button className="btn btn-sm btn-danger mx-1" onClick={() => handleDeleteProduct(id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </td>
      {productDetails && (
        <ProductModal show={showModal} handleClose={handleCloseModal} product={productDetails} />
      )}
    </tr>
  );
};

TableItemProduct.propTypes = {
  product: PropTypes.object,
  handleEditProduct: PropTypes.func,
  handleDeleteProduct: PropTypes.func
};