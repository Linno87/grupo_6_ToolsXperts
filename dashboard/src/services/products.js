

export const getProducts = async () => {
    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/apis/products`)
        const result = await response.json();
        console.log(result);
        return result
        
    } catch (error) {
        console.log(error)
    }
}