import { Button, Card, CardBody, CardHeader, CardTitle, Form } from "react-bootstrap"

export const FormProduct = () => {
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Agregar producto
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Form className="row">
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre del producto"
                            name="name"
                        />

                    </Form.Group>
                    <Form.Group className="mb-3 col-12 col-md-6">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12 col-md-6">
                        <Form.Label>Descuento</Form.Label>
                        <Form.Control
                            type="number"
                            name="discount"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select
                            className="form-control"
                            name="brandId"
                        >
                            <option hidden value="">Seleccione la marca</option>
                            {
                                [].map(({ id, name }) => <option key={id} value={id}>{name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select
                            className="form-control"
                            name="categoryId"
                        >
                            <option hidden value="">Seleccione la categoria</option>
                            {
                                [].map(({ id, name }) => <option key={id} value={id}>{name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            name="description"
                            as="textarea" rows={3}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-around w-100">
                    <Button type="button" variant="outline-dark" className="mt-5">
                        Cancelar
                    </Button>
                    <Button type="submit" variant="outline-dark" className="mt-5">
                        Guardar
                    </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    )
}