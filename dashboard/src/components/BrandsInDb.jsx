import { ContentRowItemBrand } from "./ContentRowItemGenre"

const data = [
    {
        id: crypto.randomUUID(),
        title: "Acción"

    },
    {
        id: crypto.randomUUID(),
        title: "Animación"
    },
    {
        id: crypto.randomUUID(),
        title: "Aventura"
    },
    {
        id: crypto.randomUUID(),
        title: "Ciencia Ficción"
    },
    {
        id: crypto.randomUUID(),
        title: "Comedia"
    },
    {
        id: crypto.randomUUID(),
        title: "Documental"
    },
    {
        id: crypto.randomUUID(),
        title: "Drama"
    },
    {
        id: crypto.randomUUID(),
        title: "Fantasia"
    },
    {
        id: crypto.randomUUID(),
        title: "Infantiles"
    },
    {
        id: crypto.randomUUID(),
        title: "Musical"
    }
]
export const BrandsInDb = () => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Nuestras marcas</h5>
                </div>
                <div className="card-body">
                <div className="row">
                    {
                        data.map(({ title, id }) => <ContentRowItemBrand key={id} title={title} />)
                    }
                </div>
                </div>
            </div>
        </div>
    )
}
