import { useEffect, useState } from "react";
import { MetricItem } from "./MetricItem"
import { getCategories, getProducts, getUsers } from "../services/products";
const data = [
	{
		id: crypto.randomUUID(),
		color: "primary",
		title: "Productos en stock",
		icon: "fa-toolbox"
	},
	{
		id: crypto.randomUUID(),
		color: "success",
		title: "Usuarios registrados",
		icon: "fa-user"
	},
	{
		id: crypto.randomUUID(),
		color: "warning",
		title: "Categorias",
		icon: "fa-clipboard-list"
	}
]

export const Metrics = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([])
	const [users, setUsers] = useState([])

	useEffect(() => {
        const fetchProducts = async () => {
            const result = await getProducts();
            setProducts(result.data);
        };
        fetchProducts();

		const fetchUsers = async () => {
			const result = await getUsers();
			setUsers(result.data);
		};
		fetchUsers();

        const fetchCategories = async () => {
            const result = await getCategories();
            setCategories(result.data);
        };
        fetchCategories();
    }, []);

	return (
		<div className="col-12">
			<div className="row">
				{
					data.map(({ color, title, icon, id }) =>
						<MetricItem
							key={id}
							color={color}
							title={title}
							value={
                                title === "Productos en stock" ? products.length :
								title === "Usuarios registrados" ? users.length :
                                title === "Categorias" ? categories.length :
                                "Valor por definir"
                            } 
							icon={icon}
						/>
					)
				}
			</div>
		</div>
	)
}
