function verDetalles(producto) {
    const detalles = `
        <div class="detalles-producto">
            <h2>${producto.querySelector('h3').textContent}</h2>
            <img src="${producto.querySelector('img').src}" alt="${producto.querySelector('h3').textContent}">
            <p>${producto.querySelector('p').textContent}</p>
            <button onclick="cerrarDetalles()">Cerrar</button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', detalles);
}

function cerrarDetalles() {
    document.querySelector('.detalles-producto').remove();
}

// Selección de los elementos
const workWithUsCheckbox = document.getElementById('workWithUs');
const fileUploadContainer = document.getElementById('fileUploadContainer');

// Escuchar el cambio en el estado del checkbox
workWithUsCheckbox.addEventListener('change', () => {
    // Mostrar el contenedor de subir archivo si el checkbox está marcado
    if (workWithUsCheckbox.checked) {
        fileUploadContainer.style.display = 'block';
    } else {
        fileUploadContainer.style.display = 'none';
    }
});
