import { Card, Table } from "react-bootstrap"
import { FormSearchProduct } from "./FormSearchProduct"
import PropTypes from "prop-types";
import { TableItemProduct } from "./TableItemProduct";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export const TableProducts = ({
    loading,
    products,
    handleDeleteProduct,
    handleEditProduct,
    itemsPerPage
}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;

        setItemOffset(newOffset);
    };
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <FormSearchProduct />

                    <ReactPaginate
                        pageCount={pageCount}
                        breakLabel="..."
                        nextLabel=">"
                        previousLabel="<"
                        pageRangeDisplayed={4}
                        onPageChange={handlePageClick}
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        marginPagesDisplayed={2}
                        containerClassName="pagination justify-content-center cursorPage"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"

                    />
                </div>
                {loading ? (
                    <p>cargando...</p>
                ) : (
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Descuento</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((product, index) => (
                                <TableItemProduct
                                    key={index + product.name}
                                    product={product}
                                    handleEditProduct={handleEditProduct}
                                    handleDeleteProduct={handleDeleteProduct}
                                />
                            ))}
                        </tbody>
                    </Table>
                )}
            </Card.Body>
        </Card>
    )
}

TableProducts.propTypes = {
    loading: PropTypes.bool,
    products: PropTypes.array,
    handleEditProduct: PropTypes.func,
    handleDeleteProduct: PropTypes.func,
    itemsPerPage : PropTypes.number
  };
