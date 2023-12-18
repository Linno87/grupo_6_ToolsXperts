import { Card, Col, Row, Table } from "react-bootstrap"
import { FormProduct } from "../components/FormProduct"
import { Loading } from "../components/Loading"
import { FormSearchProduct } from "../components/FormSearchProduct"
import { useState } from "react"
import { TableItemProduct } from "../components/TableItemProduct"
import { useLoaderData } from "react-router-dom";


export const ProductsListPage = () => {

  const [loading, setLoading] = useState(false)
  const handleEditProduct = () => {}
  const handleDeleteProduct = () => {}

  const products = useLoaderData();

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lista de productos</h1>
      </div>
      <Row>
        <Col sm={12} md={4}>
          <FormProduct />
        </Col>
        <Col sm={12} md={8}>
          {loading ?
            <Loading />
            :
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <FormSearchProduct />
                </div>
                <Table striped>
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Descuento</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[].map(
                      (product, index) => (
                        <TableItemProduct
                          key={index + product.name}
                          product={product}
                          handleEditProduct={handleEditProduct}
                          handleDeleteProduct={handleDeleteProduct}
                        />
                      )
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          }
        </Col>
      </Row>

    </>
  )
}
