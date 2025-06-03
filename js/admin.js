document.addEventListener('DOMContentLoaded', function () {
    let paginaActual = 1;
    cargarUsuarios(paginaActual);

    function cargarUsuarios(pagina) {
        fetch(`api/usuarios?page=${pagina}`)
            .then(res => res.json())
            .then(data => {
                const tabla = document.getElementById('tabla-usuarios');
                tabla.innerHTML = '';

                data.data.forEach(usuario => {
                    const fila = document.createElement('tr');

                    fila.innerHTML = `
                        <td>${usuario.email}</td>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.apellidos}</td>
                        <td><button class="rol-btn btn btn-primary" data-id="${usuario.id}">${usuario.is_admin ? 'Quitar admin' : 'Hacer admin'}</button></td>
                        <td><button class="del-btn btn btn-danger" data-id="${usuario.id}">Eliminar</button></td>
                    `;

                    tabla.appendChild(fila);
                });

                // Paginación
                const paginacion = document.getElementById('paginacion');
                paginacion.innerHTML = data.links;

// Hacer que los enlaces funcionen con AJAX
document.querySelectorAll('#paginacion a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const url = new URL(this.href);
        const page = url.searchParams.get('page');
        cargarUsuarios(page);
    });
});


                // Asignar eventos
                asignarEventos();
            });
    }

    function asignarEventos() {
        document.querySelectorAll('.rol-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                fetch(`api/usuario/${id}/rol`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                    }
                }).then(() => cargarUsuarios(paginaActual));
            });
        });

        document.querySelectorAll('.del-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                if (confirm('¿Eliminar este usuario?')) {
                    fetch(`api/usuario/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                        }
                    }).then(() => cargarUsuarios(paginaActual));
                }
            });
        });
    }
});


const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('.menu div');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    loadImages(category);
  });
});

function loadImages(category) {
  gallery.innerHTML = ''; // Limpiar galería
  const basePath = `ropita/${category}/`;
  const totalImages = 11; // Ajusta según la cantidad real

  for (let i = 0; i <= totalImages; i++) {
    const imgPath = `${basePath}untitled${i}.png`;
    const div = document.createElement('div');
    div.className = 'item';
    div.style.backgroundImage = `url('${imgPath}')`;
    div.style.backgroundSize = "170px 125px";
    div.style.backgroundPosition = "center";
    div.style.backgroundRepeat = "no-repeat";
    gallery.appendChild(div);
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const results = document.createElement('div');
  results.id = 'results';
  document.body.appendChild(results);

  let currentUrl = ''; // Guardamos la prenda activa

  gallery.addEventListener('click', function (e) {
    const target = e.target.closest('.item');
    if (!target) return;

    currentUrl = target.style.backgroundImage.slice(5, -2);
    fetchEnlaces(currentUrl, 1);
  });

  window.fetchEnlaces = function (url, page = 1) {
    fetch('api/catalogo/enlaces', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({ urlprenda: url, page })
    })
    .then(res => res.json())
    .then(data => renderTable(data, url))
    .catch(console.error);
  };

  window.deleteEnlace = function (id, url, page = 1) {
    fetch(`api/catalogo/enlaces/${id}`, {
      method: 'DELETE',
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
      }
    })
    .then(res => res.json())
    .then(() => fetchEnlaces(url, page))
    .catch(console.error);
  };

  function renderTable(data, url) {
    let html = `
      <div style="margin: 20px auto 0 auto; width: fit-content; text-align: center;">
        <input type="text" id="nuevo-enlace" class="form-control mx-auto mt-5" placeholder="Escribe un enlace" style="width:300px; margin-bottom:10px;">
        <input type="hidden" id="urlitem" name="urlitem" value="${url}">
        <button id="btn-agregar" class="btn btn-primary" >Agregar Enlace</button>
      </div>

      <div class="table-responsive"><table border="1" cellpadding="8" style="margin-top:20px;" class="table table-bordered table-striped text-center">
        <thead class="table-dark"><tr><th>Enlace</th><th>Acción</th></tr></thead> 
    `;
    

    data.data.forEach(item => {
      html += `
        <tr>
          <td><a href="${item.enlace}" target="_blank">${item.enlace}</a></td>
          <td><button onclick="deleteEnlace(${item.id}, '${url}', ${data.current_page})" class="del-btn btn btn-danger">Eliminar</button></td>
        </tr>
      `;
    });

    html += `</table></div><nav aria-label="Page navigation" style="display: block; margin: 0 auto; width: fit-content;"><ul class="pagination">`;

// Botón Anterior
if (data.current_page > 1) {
  html += `
    <li class="page-item">
      <button class="page-link" onclick="fetchEnlaces('${url}', ${data.current_page - 1})" aria-label="Previous">
        ‹
      </button>
    </li>`;
} else {
  html += `
    <li class="page-item disabled">
      <span class="page-link">‹</span>
    </li>`;
}

// Botones numerados
for (let i = 1; i <= data.last_page; i++) {
  html += `
    <li class="page-item ${i === data.current_page ? 'active' : ''}">
      <button class="page-link" onclick="fetchEnlaces('${url}', ${i})" ${i === data.current_page ? 'disabled' : ''}>${i}</button>
    </li>`;
}

// Botón Siguiente
if (data.current_page < data.last_page) {
  html += `
    <li class="page-item">
      <button class="page-link" onclick="fetchEnlaces('${url}', ${data.current_page + 1})" aria-label="Next">
        ›
      </button>
    </li>`;
} else {
  html += `
    <li class="page-item disabled">
      <span class="page-link">›</span>
    </li>`;
}

html += `</ul></nav>`;
document.getElementById('results').innerHTML = html;

    // Añadir evento al botón de agregar enlace
    
const btnAgregar = document.getElementById('btn-agregar');

if (btnAgregar) {
  btnAgregar.addEventListener('click', function () {
    const urlprenda = document.getElementById('urlitem').value;
    const enlace = document.getElementById('nuevo-enlace').value;

    fetch('catalogo/crear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify({ urlprenda, enlace })
    })
    .then(response => {
      if (!response.ok) throw new Error('Error al guardar');
      return response.json();
    })
    .then(data => {
      console.log('Insertado:', data);
      alert('Registro agregado correctamente');
      fetchEnlaces(urlprenda); // Recargar la tabla después de insertar
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un problema al insertar');
    });
  });
} else {
  console.warn('No se encontró el botón #btn-agregar en el DOM');
}

  }
});




document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  gallery.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(".item");
    if (!clickedItem) return;

    // Quitar clase 'active' de todos los items
    const allItems = gallery.querySelectorAll(".item");
    allItems.forEach(i => i.classList.remove("active"));

    // Agregar clase 'active' al item clicado
    clickedItem.classList.add("active");
  });
});





