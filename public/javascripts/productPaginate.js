/* const urlApiProducts = "http://localhost:3000/apis/products";
const containerProduct = document.getElementById("paginator");

// Realizar la solicitud usando fetch y manejar la promesa
fetch(urlApiProducts)
  .then(response => {
    // Verificar si la solicitud fue exitosa (código de respuesta en el rango 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parsear la respuesta como JSON
    return response.json();
  })
  .then(data => {
    // Trabajar con los datos obtenidos
  const products = data.data.products

  products.forEach(({id, image,discount, description, name} )=> {
    containerProduct.innerHTML +=`
    <div class="card card_p heartFavorite">
  
       <span class="text-danger heart"><i class="far fa-heart fa-lg vacio"></i><i class="fas fa-heart fa-lg relleno"></i></span>
 
    <img src="/img/products/${image} " alt="...">
  <a href="/detalle">${id}</a>
    
    <div class="card-body card_body">
     
            <div class="descripcion_recomendados">
                <h5 class="text-light" >${discount} %</h5>
            </div>
        
        
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description && description.substr(0,60)}...</p>
        <a href="/products/detalle/${id}" class="home__main__article--product-descripcion">ver más</a>
    </div>
</div>
    `
  });

  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error('Fetch error:', error);
  });
 */