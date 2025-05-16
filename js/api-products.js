document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('product-container');

  fetch('http://localhost:8082/') // Cambia por tu API real si quieres
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar productos');
      return response.json();
    })
    .then(products => {
      products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col mb-5';

        col.innerHTML = `
          <div class="card h-100">
            <img class="card-img-top" src="${product.image}" alt="${product.title}" />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${product.title}</h5>
                $${product.price}
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Ver Detalle</a>
              </div>
            </div>
          </div>
        `;
        container.appendChild(col);
      });
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = `<p class="text-danger">No se pudieron cargar los productos</p>`;
    });
});
