const cardsContainer = document.querySelector("#cards-container");
const URL_API_SERVER = "http://localhost:3000/apis";


const getFavorites = async () => {
  try {
    const response = await fetch(`${URL_API_SERVER}/favoritos`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error en la solicitud : ${response.statusText}`);
    }
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error: error.menssage };
  }
};

const convertFormatPeso = (n) =>
  n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
const paintProducts = ({products} ) => {
  if (products.length) {
    console.log(products);
    cardsContainer.innerHTML = "";
    products.forEach(({ id, image, discount, description, name, price }) => {
      const priceDiscount = discount ? price - (price * discount) / 100 : price;
      const priceFormatARG = convertFormatPeso(priceDiscount);

      const template = `<div class="card card_p heartFavorite">
     
   <img src="/img/products/${image}" alt="...">
   <a href="/detalle">${id}</a>
    
    <div class="card-body card_body">
        ${
          discount !== 0
            ? `<div class="descripcion_recomendados">
                <h5 class="text-light">` +
              discount +
              ` %</h5></div>`
            : ""
        }  
        <h5 class="card-title">${name}</h5>
        <h6 class="price">${priceFormatARG}</h6>
        <p class="card-text">${description && description.substr(0, 60)}...</p>
        <a href="/products/detalle/${id}" class="home__main__article--product-descripcion">ver más</a>
        <button class= "botonCarrito">Agregar Carrito</button>
    </div>
</div>`
      cardsContainer.innerHTML += template;
    });
    return;
  }
  cardsContainer.innerHTML = "<h1>No existen productos Favoritos</h1>";
};

window.addEventListener("load", async () => {
  try {
    const { ok, data } = await getFavorites();
    console.log(data);
    if (ok) {
      paintProducts({ products: data.data });
    }
  } catch (error) {
    console.log(error);
  }
});
