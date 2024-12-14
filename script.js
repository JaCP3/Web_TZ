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


function toggleFileUpload() {
    const checkbox = document.getElementById('workWithUs');
    const fileUploadContainer = document.getElementById('fileUploadContainer');
    
    // Mostrar u ocultar el contenedor del archivo dependiendo del estado del checkbox
    if (checkbox.checked) {
        fileUploadContainer.style.display = 'block';
    } else {
        fileUploadContainer.style.display = 'none';
    }
}
