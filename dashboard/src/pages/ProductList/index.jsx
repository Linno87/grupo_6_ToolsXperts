import { Col, Row } from "react-bootstrap"
import { FormProduct } from "../../components/FormProduct"

import { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../../services/products"
import { TableProducts } from "../../components/TableProducts"


export const ProductsListPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const [formValues, setFormValues] = useState({
    id: null,
    name: "",
    price: "",
    discount: "",
    brandId: "",
    categoryId: "",
    description: "",
    image : ""
  });

  const handleEditProduct = (idProduct) => {
    const { id, name, price, discount, brandId, categoryId, description, image } =
      products.find((product) => product.id === idProduct);
    setFormValues({
      id,
      name,
      price,
      discount,
      brandId,
      categoryId,
      description,
      image
    });
  };
  const handleDeleteProduct = async (id) => {
    
    await deleteProduct(id);
    const productsFiltered = products.filter((product) => product.id !== id);

    setProducts(productsFiltered);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      setProducts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lista de productos</h1>
      </div>
      <Row>
        <Col sm={12} md={4}>
          <FormProduct
          setProducts={setProducts}
          products={products}
          formValues={formValues}
          setFormValues={setFormValues}
          />
        </Col>
        <Col sm={12} md={8}>
            <TableProducts
            itemsPerPage={7}
            loading={loading}
            products={products}
            formValues={formValues}
            handleDeleteProduct={handleDeleteProduct}
            handleEditProduct={handleEditProduct}
            />
        </Col>
      </Row>

    </>
  )
}
