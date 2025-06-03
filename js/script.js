document.addEventListener("DOMContentLoaded", function () {
    const divs = ["prend0", "prend1", "prend2"];
    divs.forEach(id => {
        document.getElementById(id).addEventListener("click", function () {
            const background = window.getComputedStyle(this).backgroundImage;

            // Paso 1: eliminar url(...), comillas y paréntesis
            let cleanUrl = background
                .replace(/^url\(['"]?/, '')
                .replace(/['"]?\)$/, '');

            // Paso 2: eliminar todo lo que está antes de /public y añadir .. delante
            const publicIndex = cleanUrl.indexOf('/public/');
            if (publicIndex !== -1) {
                cleanUrl = '..' + cleanUrl.substring(publicIndex); // incluye "/public"
            }
                cleanUrl = cleanUrl.replace("../public/", "");
            console.log(cleanUrl); // Ej: ../public/ropita/tipos/untitled.png

            fetchEnlaces(cleanUrl, 1);
        });
    });
});


function fetchEnlaces(imageName, page) {
    fetch('obtener-enlaces', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ urlprenda: imageName, page: page })
    })
    .then(response => response.json())
    .then(data => {
        renderTable(data.links);
        renderPagination(data.pagination, imageName);
    });
}

function renderTable(links) {
    const table = document.getElementById('enlaces');
    table.innerHTML = ''; // Limpiar contenido

    links.forEach(link => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        // Estilos para permitir salto de línea y apilar elementos
        td.style.backgroundColor = 'white';
        td.style.display = 'flex';
        td.style.flexDirection = 'column'; // ✅ apilar verticalmente
        td.style.alignItems = 'flex-start'; // ✅ alinear a la izquierda
        td.style.gap = '10px';
        td.style.padding = '10px';

        // Enlace
        const enlace = document.createElement('a');
        enlace.href = link.enlace;
        enlace.textContent = link.enlace;
        enlace.target = '_blank';
        enlace.style.textDecoration = 'none';
        enlace.style.color = 'blue';
        enlace.style.wordBreak = 'break-word';
        enlace.style.maxWidth = '100%';

        // Botón
        const boton = document.createElement('button');
        boton.className = 'favs btn btn-warning btn-sm ms-2';
        boton.textContent = 'Añadir a favoritos';

        // Agregar al td
        td.appendChild(enlace);
        td.appendChild(boton);

        // Agregar fila a la tabla
        tr.appendChild(td);
        table.appendChild(tr);
    });
}






function renderPagination(pagination, imageName) {
    const paginationNav = document.getElementById('paginacion1');
    paginationNav.innerHTML = ''; // Limpiar paginación anterior

    const ul = document.createElement('ul');
    ul.className = 'pagination';

    // Botón "Anterior" («)
    const prevLi = document.createElement('li');
    prevLi.className = 'page-item' + (pagination.current_page === 1 ? ' disabled' : '');

    const prevA = document.createElement('a');
    prevA.className = 'page-link';
    prevA.href = '#';
    prevA.innerHTML = '&lt;'; // « o usa "&lt;" si prefieres "<"

    prevA.addEventListener('click', (e) => {
        e.preventDefault();
        if (pagination.current_page > 1) {
            fetchEnlaces(imageName, pagination.current_page - 1);
        }
    });

    prevLi.appendChild(prevA);
    ul.appendChild(prevLi);

    // Números de página
    for (let i = 1; i <= pagination.last_page; i++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (i === pagination.current_page ? ' active' : '');

        const a = document.createElement('a');
        a.className = 'page-link';
        a.href = '#';
        a.textContent = i;

        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (i !== pagination.current_page) {
                fetchEnlaces(imageName, i);
            }
        });

        li.appendChild(a);
        ul.appendChild(li);
    }

    // Botón "Siguiente" (»)
    const nextLi = document.createElement('li');
    nextLi.className = 'page-item' + (pagination.current_page === pagination.last_page ? ' disabled' : '');

    const nextA = document.createElement('a');
    nextA.className = 'page-link';
    nextA.href = '#';
    nextA.innerHTML = '&gt;'; // » o usa "&gt;" si prefieres ">"

    nextA.addEventListener('click', (e) => {
        e.preventDefault();
        if (pagination.current_page < pagination.last_page) {
            fetchEnlaces(imageName, pagination.current_page + 1);
        }
    });

    nextLi.appendChild(nextA);
    ul.appendChild(nextLi);

    // Añadir todo al contenedor
    paginationNav.appendChild(ul);
}








document.addEventListener("DOMContentLoaded", function () {
    const h3 = document.getElementById('formodificar');

    ['prend0', 'prend1', 'prend2'].forEach(id => {
        const el = document.getElementById(id);
        el.addEventListener('click', function () {
            const bgColor = window.getComputedStyle(el).backgroundColor;

            // Solo continuar si el color de fondo es naranja (RGB que mencionaste)
            if (bgColor === 'rgb(255, 145, 0)') {
                let idprenda = h3.textContent.replace('Nombre:', '').trim();

                const bgImage = window.getComputedStyle(el).backgroundImage;
                const urlRegex = /url\(["']?(.*?)["']?\)/;
                const matches = bgImage.match(urlRegex);
                let urlprenda = matches ? matches[1] : '';

            const index = urlprenda.indexOf("ropita");
            if (index !== -1) {
            urlprenda = urlprenda.substring(index);
            }


                console.log('Ejecutando fetch con:');
                console.log('idprenda:', idprenda);
                console.log('urlprenda:', urlprenda);

                fetchLinks2(idprenda, urlprenda, 1);
            }
        });
    });

    function fetchLinks2(idprenda, urlprenda, page) {
        fetch("obtener-favoritos?page=" + page, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({ idprenda, urlprenda })
        })
        .then(res => res.json())
        .then(data => {
            renderLinks2(data.data);
            renderPagination2(data, idprenda, urlprenda);
        });
    }

    function renderLinks2(enlaces) {
    const table = document.getElementById('favsenlaces');
    table.innerHTML = ''; // Limpiar tabla

    enlaces.forEach(enlace => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        // Estilos actualizados con Flexbox en columna
        td.style.backgroundColor = 'white';
        td.style.display = 'flex';
        td.style.flexDirection = 'column'; // ✅ apilar verticalmente
        td.style.alignItems = 'flex-start'; // ✅ alinear a la izquierda
        td.style.gap = '10px';
        td.style.padding = '10px';

        // Crear enlace <a>
        const a = document.createElement('a');
        a.href = enlace.enlace;
        a.textContent = enlace.enlace;
        a.target = '_blank';
        a.style.textDecoration = 'none';
        a.style.color = 'blue';
        a.style.wordBreak = 'break-word'; // ✅ permitir cortes de línea
        a.style.maxWidth = '100%';

        // Crear botón de eliminar
        const boton = document.createElement('button');
        boton.className = 'favsel btn btn-danger btn-sm ms-2';
        boton.textContent = 'Eliminar de favoritos';

        // Añadir elementos al td
        td.appendChild(a);
        td.appendChild(boton);

        // Añadir a la tabla
        tr.appendChild(td);
        table.appendChild(tr);
    });
}



    function renderPagination2(data, idprenda, urlprenda) {
    const paginationNav = document.getElementById('paginacion2');
    paginationNav.innerHTML = ''; // Limpiar paginación anterior

    const ul = document.createElement('ul');
    ul.className = 'pagination';

    // Botón "Anterior"
    const prevLi = document.createElement('li');
    prevLi.className = 'page-item' + (data.current_page === 1 ? ' disabled' : '');

    const prevA = document.createElement('a');
    prevA.className = 'page-link';
    prevA.href = '#';
    prevA.innerHTML = '&lt;'; // símbolo «

    prevA.addEventListener('click', (e) => {
        e.preventDefault();
        if (data.current_page > 1) {
            fetchLinks2(idprenda, urlprenda, data.current_page - 1);
        }
    });

    prevLi.appendChild(prevA);
    ul.appendChild(prevLi);

    // Números de página
    for (let i = 1; i <= data.last_page; i++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (i === data.current_page ? ' active' : '');

        const a = document.createElement('a');
        a.className = 'page-link';
        a.href = '#';
        a.textContent = i;

        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (i !== data.current_page) {
                fetchLinks2(idprenda, urlprenda, i);
            }
        });

        li.appendChild(a);
        ul.appendChild(li);
    }

    // Botón "Siguiente"
    const nextLi = document.createElement('li');
    nextLi.className = 'page-item' + (data.current_page === data.last_page ? ' disabled' : '');

    const nextA = document.createElement('a');
    nextA.className = 'page-link';
    nextA.href = '#';
    nextA.innerHTML = '&gt;'; // símbolo »

    nextA.addEventListener('click', (e) => {
        e.preventDefault();
        if (data.current_page < data.last_page) {
            fetchLinks2(idprenda, urlprenda, data.current_page + 1);
        }
    });

    nextLi.appendChild(nextA);
    ul.appendChild(nextLi);

    // Añadir lista de paginación al contenedor
    paginationNav.appendChild(ul);
}
});





document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('favsenlaces');

    if (!table) return;

    table.addEventListener('click', async function (e) {
        if (e.target && e.target.classList.contains('favsel')) {
            e.preventDefault();

            const favselButton = e.target;
            const h3 = document.getElementById('formodificar'); // Asegúrate que el ID es correcto
            if (!h3) {
                console.log('No se encontró el h3 con id formmodificar');
                return;
            }

            const rawText = h3.textContent || '';
            const cleanedText = rawText.replace('Nombre:', '').trim();
            const idprenda = cleanedText

            console.log(idprenda)

            const td = favselButton.closest('td');
            if (!td) return;

            const enlace = td.textContent.replace('Eliminar de favoritos', '').trim();

            try {
                const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

                const response = await fetch('eliminar-enlaces', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': token,
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({ idprenda, enlace }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    alert('Error al eliminar: ' + (errorData.message || response.status));
                    return;
                }

                const result = await response.json();
                alert(result.message);
                // Eliminar la fila de la tabla
                favselButton.closest('tr').remove();

            } catch (error) {
                console.error('Error al enviar la petición:', error);
                alert('Ocurrió un error al eliminar el enlace.');
            }
        }
    });
});











function mostrarPrendasConImagenes() {
    document.querySelector('.tresprendas').style.display = 'flex';
    const prendas = [
        { imgId: "som", divId: "prend0" },
        { imgId: "cam", divId: "prend1" },
        { imgId: "pan", divId: "prend2" },
    ];

    prendas.forEach(({ imgId, divId }) => {
        const imgElement = document.getElementById(imgId)?.querySelector("img");
        const divElement = document.getElementById(divId);

        if (imgElement && imgElement.src && imgElement.src.trim() !== "") {
            // Extraer ruta relativa a partir de la URL completa
            const fullUrl = imgElement.src;
            const basePath = "/ropita/";
            const index = fullUrl.indexOf(basePath);
            const relativeUrl = index !== -1 ? "../public" + fullUrl.substring(index) : fullUrl;

            // Aplicar estilos
            
            divElement.style.backgroundImage = `url('${relativeUrl}')`;
            divElement.style.backgroundSize = "300px 200px";
            divElement.style.backgroundPosition = "center";
            divElement.style.backgroundRepeat = "no-repeat";
        }
    });
}






function aplicarEventosEliminar() {
    document.querySelectorAll(".el").forEach(function (boton) {
        if (!boton.dataset.eventApplied) {
            boton.dataset.eventApplied = "true";
            boton.addEventListener("click", function () {
                const listin = boton.closest(".listin");
                const idprenda = listin.querySelector(".nombre").textContent.trim();

                fetch("eliminarrr", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                    },
                    body: JSON.stringify({
                        idprenda: idprenda,
                        _method: "DELETE"
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        listin.remove();
                    } else {
                        alert("No se pudo eliminar la prenda.");
                    }
                })
                .catch(err => {
                    console.error("ERROR:", err);
                });
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    aplicarEventosEliminar();

    const observer = new MutationObserver(aplicarEventosEliminar);
    observer.observe(document.body, { childList: true, subtree: true });
});














document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
        const modDiv = e.target.closest('.listin .mod');
        if (!modDiv) return;

        const listinDiv = modDiv.closest('.listin');
        if (!listinDiv) return;

        const nombreDiv = listinDiv.querySelector('.nombre');
        if (!nombreDiv) return;

        const nombre = nombreDiv.textContent.trim();

        const formodificar = document.getElementById('formodificar');
        const hiddenInput = document.getElementById('formodlook');

        if (formodificar) {
            formodificar.textContent = 'Nombre: ' + nombre;
        }

        if (hiddenInput) {
            hiddenInput.value = nombre;
        }
    });
});



function inicializarPaginacionAJAX(contenedorId = 'contenido-prendas') {
    document.addEventListener('DOMContentLoaded', function () {
        const container = document.getElementById(contenedorId);

        if (!container) {
            console.warn(`No se encontró el contenedor con id '${contenedorId}'`);
            return;
        }

        container.addEventListener('click', function (e) {
            const link = e.target.closest('.pagination a');
            if (link) {
                e.preventDefault();
                const url = link.getAttribute('href');
                cargarPagina(url);
            }
        });

        function cargarPagina(url) {
            fetch(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar la página");
                }
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                console.error("Hubo un problema con la petición AJAX:", error);
            });
        }
    });
}

// Llamada automática
inicializarPaginacionAJAX('contenido-prendas');




function clickOrangeElementsInOrder() {
    const isOrange = (color) => color === 'orange' || color === 'rgb(255, 145, 0)';
    
    const findFirstOrange = (ids) => {
        for (let id of ids) {
            const el = document.getElementById(id);
            if (el) {
                const bgColor = window.getComputedStyle(el).backgroundColor;
                if (isOrange(bgColor)) {
                    return el;
                }
            }
        }
        return null;
    };

    // Paso 1: Buscar un TD naranja entre tip1, tip2, tip3
    const tipElement = findFirstOrange(['tip1', 'tip2', 'tip3']);

    // Paso 2: Buscar un TD naranja entre btn1 y btn2
    const btnElement = findFirstOrange(['btn1', 'btn2']);

    // Paso 3: Simular clics en orden si ambos existen
    if (tipElement && btnElement) {
        tipElement.click();
        btnElement.click();
    }
}



document.getElementById("btn1").style.backgroundColor = "rgb(255, 145, 0)";
let tipo = "sombreros"
const imagenes = [
    "untitled0.png", "untitled1.png", "untitled2.png", "untitled3.png", "untitled4.png", "untitled5.png",
    "untitled6.png", "untitled7.png", "untitled8.png", "untitled9.png", "untitled10.png", "untitled11.png"
  ];
  let selects, selectc, selectp

  let imsom
  let imcam
  let impan
  let cambiofon

 let colorin = "tip1"
 document.getElementById("tip1").style.backgroundColor = "rgb(255, 145, 0)";

  function cargarImagenes(rango) {
   
    for (let i = 0; i < 6; i++) {
      const imgElement = document.getElementById(`img${i + 1}`);
      imgElement.style.backgroundImage = `url(ropita/${tipo}/${imagenes[rango + i]})`; 
      const estilin = imgElement.style.backgroundImage
      console.log(estilin)
      if(imsom === estilin){
        imgElement.style.backgroundColor = "rgb(255, 145, 0)";
       
      }else if(imcam === estilin){
        imgElement.style.backgroundColor = "rgb(255, 145, 0)";
       
      }else if(impan === estilin){
        imgElement.style.backgroundColor = "rgb(255, 145, 0)";
        
      }else{
        imgElement.style.backgroundColor = "rgb(236, 230, 135)";
      }

      

    }
  }

  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 
  cargarImagenes(0);
  

  




  
  function manejarClick(event) {
    const id = event.target.id;
    

    if (id === "combi0" || id === "combi1" || id === "combi2" || id === "combi3") {
      const generar = document.getElementById(id);
      
      if(cambiofon){
        cambiofon.style.backgroundColor = "rgb(176, 194, 194)";
      }
      generar.style.backgroundColor = "rgb(255, 145, 0)";
      cambiofon = generar
      
      const fondo = getComputedStyle(generar).backgroundImage;
      const actu = fondo.match(/url\(["']?.*?["']?\)/g);
      const prim = actu[0]
      .replace(/url\(".*?\/public\//, 'url("')
    .replace(/["']?\)$/, '")');
      console.log(prim)
      imsom = prim
      const seg = actu[1]
      .replace(/url\(".*?\/public\//, 'url("')
    .replace(/["']?\)$/, '")');
      
      imcam = seg
      const ter = actu[2]
      .replace(/url\(".*?\/public\//, 'url("')
    .replace(/["']?\)$/, '")');
      
      impan = ter

      
      const urls = fondo
          .match(/url\(["']?(.*?)["']?\)/g)  
          .map(url => url.match(/url\(["']?(.*?)["']?\)/)[1]);  
  
      
      document.getElementById('som').querySelector('img').src = urls[0];
      const inputSombreros = document.querySelector('input[name="sombreros"]');
      inputSombreros.value = urls[0];
      document.getElementById('cam').querySelector('img').src = urls[1]; 
      const inputCamisetas = document.querySelector('input[name="camisetas"]');
      inputCamisetas.value = urls[1];
      document.getElementById('pan').querySelector('img').src = urls[2]; 
      const inputPantalones = document.querySelector('input[name="pantalones"]');
      inputPantalones.value = urls[2];
      clickOrangeElementsInOrder();
      mostrarPrendasConImagenes()
  }


    if(id === "img1" || id === "img2" || id === "img3" || id === "img4" || id === "img5" || id === "img6"){
      if(cambiofon){
        cambiofon.style.backgroundColor = "rgb(176, 194, 194)";
      }
        const elemento = document.getElementById(`${id}`);
        const fondo = getComputedStyle(elemento).backgroundImage;
        const urlFondo = fondo.slice(4, -1).replace(/['"]/g, '');
        let idAv
        if(tipo === "sombreros"){
            idAv = "som"
            idEv = "sombreros"
            const style = window.getComputedStyle(elemento);
            const backgroundImage = style.getPropertyValue("background-image");
           imsom = backgroundImage
    .replace(/url\(".*?\/public\//, 'url("')
    .replace(/["']?\)$/, '")');
            if(selects){
              selects.style.backgroundColor = "rgb(236, 230, 135)";
            }
          elemento.style.backgroundColor = "rgb(255, 145, 0)";
          clickOrangeElementsInOrder();
          selects = elemento
            console.log(imsom)

        }else if(tipo === "camis"){
            idAv = "cam"
            idEv = "camisetas"
            const style = window.getComputedStyle(elemento);
            const backgroundImage = style.getPropertyValue("background-image");
            imcam = backgroundImage
            .replace(/url\(".*?\/public\//, 'url("')
            .replace(/["']?\)$/, '")');
            if(selectc){
              selectc.style.backgroundColor = "rgb(236, 230, 135)";
            }
          elemento.style.backgroundColor = "rgb(255, 145, 0)";
          clickOrangeElementsInOrder();
          selectc = elemento
        }else{
            idAv = "pan"
            idEv = "pantalones"
            const style = window.getComputedStyle(elemento);
            const backgroundImage = style.getPropertyValue("background-image");
            impan = backgroundImage
            .replace(/url\(".*?\/public\//, 'url("')
            .replace(/["']?\)$/, '")');
            if(selectp){
              selectp.style.backgroundColor = "rgb(236, 230, 135)";
            }
          elemento.style.backgroundColor = "rgb(255, 145, 0)";
          clickOrangeElementsInOrder();
          selectp = elemento
        }

        const vestir = document.getElementById(`${idAv}`).querySelector('img');
        const guardar = document.getElementsByName(`${idEv}`)[0]
        vestir.src = urlFondo
        guardar.value = urlFondo
        mostrarPrendasConImagenes();
    }

    
    if(id=== "tip1"){
        
    document.getElementById("titulotipo").innerText = "Sombreros";


      document.getElementById("btn1").style.backgroundColor = "rgb(255, 145, 0)";
      document.getElementById("btn2").style.backgroundColor = "rgb(236, 230, 135)";
        tipo = "sombreros"
        cargarImagenes(0);
        if(colorin == "tip2" || colorin == "tip3"){
          document.getElementById(colorin).style.backgroundColor = "rgb(236, 230, 135)";
        }
        
        document.getElementById(id).style.backgroundColor = "rgb(255, 145, 0)";
        colorin = id

    }

    if(id=== "tip2"){
        document.getElementById("titulotipo").innerText = "Camisetas";
      document.getElementById("btn1").style.backgroundColor = "rgb(255, 145, 0)";
      document.getElementById("btn2").style.backgroundColor = "rgb(236, 230, 135)";
        tipo = "camis"
        cargarImagenes(0); 
        if(colorin == "tip1" || colorin == "tip3"){
        document.getElementById(colorin).style.backgroundColor = "rgb(236, 230, 135)";
        }
        document.getElementById(id).style.backgroundColor = "rgb(255, 145, 0)";
        colorin = id
    }

    if(id=== "tip3"){
        document.getElementById("titulotipo").innerText = "Pantalones";
      document.getElementById("btn1").style.backgroundColor = "rgb(255, 145, 0)";
      document.getElementById("btn2").style.backgroundColor = "rgb(236, 230, 135)";
        tipo = "pantalones"
        cargarImagenes(0);
        if(colorin == "tip2" || colorin == "tip1"){
        document.getElementById(colorin).style.backgroundColor = "rgb(236, 230, 135)";
        }
        document.getElementById(id).style.backgroundColor = "rgb(255, 145, 0)";
        colorin = id
    }

    if (id === "btn1") {
      document.getElementById(id).style.backgroundColor = "rgb(255, 145, 0)";
      document.getElementById("btn2").style.backgroundColor = "rgb(236, 230, 135)";

      cargarImagenes(0);
    } else if (id === "btn2") {
      document.getElementById(id).style.backgroundColor = "rgb(255, 145, 0)";
      document.getElementById("btn1").style.backgroundColor = "rgb(236, 230, 135)";
      cargarImagenes(6);
    }
  }

  const enlaces = ["sombreros", "camis", "pantalones"];

function generarLook() {
    for (let j = 0; j < 4; j++) {
        const generar = document.getElementById(`combi${j}`);
        
        const nuevasUrls = [];

        for (let i = 0; i < 3; i++) {
            const tipin = enlaces[i];
            const generado = generarNumeroAleatorio(0, 11);
            nuevasUrls[i] = `url('ropita/${tipin}/untitled${generado}.png')`;
        }

     
        nuevasUrls[3] = `url('ropita/avatar.png')`;

       
        generar.style.backgroundImage = nuevasUrls.join(', ');
    }
}


  function generarItem(){

    const aleatuno = generarNumeroAleatorio(0, 2)
    const aleatdos = generarNumeroAleatorio(0, 11)

    const generarr = document.getElementById('item').querySelector('img')
    const srcdoss = `ropita/${enlaces[aleatuno]}/untitled${aleatdos}.png`
    generarr.src = srcdoss

  }



  generarLook();
  generarItem();
  

function aplicarEventosListines() {
    const listines = document.querySelectorAll('.listin');
    const guardarrr = document.querySelector('.guardarrr');
    const modificarrr = document.querySelector('.modificarrr');
    const cancelarBtn = document.querySelector('.modificarrr .cancelar');

    listines.forEach(listin => {
        const modBtn = listin.querySelector('.mod');
        const imagenesDiv = listin.querySelector('.imagenes');

        if (modBtn && imagenesDiv) {
            modBtn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
                const bgImages = getComputedStyle(imagenesDiv).backgroundImage;
                const urls = [...bgImages.matchAll(/url\("?([^")]+)"?\)/g)].map(match => match[1]);

                if (urls.length >= 3) {
                    document.querySelector('#som img').src = urls[0];
                    document.querySelector('input[name="sombreros"]').value = urls[0];

                    document.querySelector('#cam img').src = urls[1];
                    document.querySelector('input[name="camisetas"]').value = urls[1];

                    document.querySelector('#pan img').src = urls[2];
                    document.querySelector('input[name="pantalones"]').value = urls[2];
                }

                mostrarPrendasConImagenes();

                if (guardarrr && modificarrr) {
                    guardarrr.classList.add('d-none');
                    guardarrr.classList.remove('d-flex');

                    modificarrr.classList.remove('d-none');
                    modificarrr.classList.add('d-flex');
                }
            });
        }
    });

    if (cancelarBtn) {
        cancelarBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('formodificar').textContent = '';
            modificarrr.classList.add('d-none');
            modificarrr.classList.remove('d-flex');

            guardarrr.classList.remove('d-none');
            guardarrr.classList.add('d-flex');
        });
    }
}

// Llamada inicial
document.addEventListener("DOMContentLoaded", function () {
    aplicarEventosListines();

    // Observamos cambios en el contenedor de listines (por ejemplo, tras paginar)
    const observer = new MutationObserver(aplicarEventosListines);
    observer.observe(document.body, { childList: true, subtree: true });
});













document.addEventListener('click', function(e) {
  if (e.target.classList.contains('mod')) {
    const listin = e.target.closest('.listin'); // Encuentra el div .listin más cercano en el árbol
    if (listin) {
      const selmod = listin.querySelector('.imagenes');
     
      const fondo = getComputedStyle(selmod).backgroundImage;
      const actu = fondo.match(/url\(["']?.*?["']?\)/g);
      const prim = actu[0]
      .replace(/url\(".*?\/public\//, 'url("')
    .replace(/["']?\)$/, '")');
      console.log(prim)
      imsom = prim
      const seg = actu[1]
      .replace(/url\(".*?\/public\//, 'url("')
    .replace(/["']?\)$/, '")');
      
      imcam = seg
      const ter = actu[2]
      .replace(/url\(".*?\/public\//, 'url("')
    .replace(/["']?\)$/, '")');
      
      impan = ter
        clickOrangeElementsInOrder();
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('enlaces');

    // Delegación de eventos para botones dentro de #enlaces
    table.addEventListener('click', async function (event) {
        const target = event.target;

        // Verifica si el click fue en un botón con clase .favs
        if (target.tagName === 'BUTTON' && target.classList.contains('favs')) {
            const enlaceTd = target.closest('td');
            const enlace = enlaceTd.childNodes[0].textContent.trim(); // "amazon", "temu", etc.

            // Obtener y limpiar el idprenda
            const h3 = document.getElementById('formodificar');
            let idprenda = h3.textContent.replace("Nombre:", "").trim().replace(/\s+/g, '');

            // Detectar el div con background naranja
            let urlprenda = '';
            for (let i = 0; i < 3; i++) {
                const div = document.getElementById('prend' + i);
                const styles = window.getComputedStyle(div);
                const bgColor = styles.backgroundColor;

                // Verificar naranja (puede ser rgb(255, 145, 0) o rgb(255, 165, 0))
                if (bgColor === 'rgb(255, 145, 0)') {
                    const bgImage = styles.backgroundImage;
                    if (bgImage && bgImage !== 'none') {
                        urlprenda = bgImage.slice(5, -2); // limpia url("...")
                    }
                    break;
                }
            }

            // CSRF token
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            if(idprenda != ''){
            try {
                const response = await fetch('guardar-enlaces', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    body: JSON.stringify({
                        idprenda: idprenda,
                        enlace: enlace,
                        urlprenda: urlprenda
                    })
                });

                if (response.ok) {
                    
                    alert('Añadido a favoritos');
                } else {
                    alert('Error al guardar');
                }
            } catch (error) {
                console.error(error);
                alert('Error de red');
            }
        }else{
            alert('No se ha podido realizar la acción');
        }
        }
    });
});

// Variables ya declaradas fuera de este script
// Asegúrate de que estas variables existan en el mismo ámbito global
// let imsom, imcam, impan;

document.addEventListener("DOMContentLoaded", function () {
    const somDiv = document.getElementById("som");
    const camDiv = document.getElementById("cam");
    const panDiv = document.getElementById("pan");

    somDiv.addEventListener("click", function () {
        const img = somDiv.querySelector("img");
        if (img) img.src = "";
        imsom = "";
        clickOrangeElementsInOrder();
    });

    camDiv.addEventListener("click", function () {
        const img = camDiv.querySelector("img");
        if (img) img.src = "";
        imcam = "";
        clickOrangeElementsInOrder();
    });

    panDiv.addEventListener("click", function () {
        const img = panDiv.querySelector("img");
        if (img) img.src = "";
        impan = "";
        clickOrangeElementsInOrder();
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const prendas = ['prend0', 'prend1', 'prend2'];

  prendas.forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
      prendas.forEach(pid => {
        document.getElementById(pid).style.backgroundColor = pid === id ? 'rgb(255, 145, 0)' : 'gray';
      });
    });
  });
});

// main.js

// script.js

// Esperar que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const btnTodos = document.getElementById('btnTodos');
  const btnFavoritos = document.getElementById('btnFavoritos');

  const enlaces = document.getElementById('enlaces');
  const paginacion1 = document.getElementById('paginacion1');
  const favsenlaces = document.getElementById('favsenlaces');
  const paginacion2 = document.getElementById('paginacion2');

  const prendas = [
    document.getElementById('prend0'),
    document.getElementById('prend1'),
    document.getElementById('prend2')
  ];

  function mostrarTodos() {
    enlaces.style.display = 'inline-block';
    paginacion1.style.display = 'flex';

    favsenlaces.style.display = 'none';
    paginacion2.style.display = 'none';
  }

  function mostrarFavoritos() {
    enlaces.style.display = 'none';
    paginacion1.style.display = 'none';

    favsenlaces.style.display = 'inline-block';
    paginacion2.style.display = 'flex';

    prendas.forEach(prenda => {
      const bgColor = window.getComputedStyle(prenda).backgroundColor;
      if (bgColor === 'rgb(255, 145, 0)' || bgColor.startsWith('rgba(255, 145, 0')) {
        prenda.click();
      }
    });
  }

  btnTodos.addEventListener('click', mostrarTodos);
  btnFavoritos.addEventListener('click', mostrarFavoritos);
});





document.addEventListener("DOMContentLoaded", function () {
    
 // o tu valor dinámico

    // Seleccionamos el <img> dentro del div con id "item"
    const imgElement = document.querySelector("#item img");

    // Asignamos cleanUrl como src de la imagen
    
     let cleanUrl = imgElement.src;

const index = cleanUrl.indexOf("ropita");
if (index !== -1) {
    cleanUrl = cleanUrl.substring(index);
}

console.log('Esto es ' + cleanUrl);

// Luego llamas a tu función fetchEnlaces3, si es necesario
fetchEnlaces3(cleanUrl, 1);
        });
    



function fetchEnlaces3(imageName, page) {
    fetch('obtener-enlaces', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ urlprenda: imageName, page: page })
    })
    .then(response => response.json())
    .then(data => {
        renderTable3(data.links);
        renderPagination3(data.pagination, imageName);
    });
}

function renderTable3(links) {
    const table = document.getElementById('enrecomen');
    table.innerHTML = ''; // Limpiar contenido

    links.forEach(link => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        // Crear elemento <a> con href
        const enlace = document.createElement('a');
        enlace.href = link.enlace;
        enlace.textContent = link.enlace;
        enlace.target = '_blank';
        enlace.style.textDecoration = 'none';
        enlace.style.color = 'blue';

        // Agregar enlace al td
        td.appendChild(enlace);

        tr.appendChild(td);
        table.appendChild(tr);
    });
}



function renderPagination3(pagination, imageName) {
    const paginationNav = document.getElementById('pagination3');
    paginationNav.innerHTML = ''; // Limpiar paginación anterior

    const ul = document.createElement('ul');
    ul.className = 'pagination';

    // Botón "Anterior" («)
    const prevLi = document.createElement('li');
    prevLi.className = 'page-item' + (pagination.current_page === 1 ? ' disabled' : '');

    const prevA = document.createElement('a');
    prevA.className = 'page-link';
    prevA.href = '#';
    prevA.innerHTML = '&lt;'; // « o usa "&lt;" si prefieres "<"

    prevA.addEventListener('click', (e) => {
        e.preventDefault();
        if (pagination.current_page > 1) {
            fetchEnlaces3(imageName, pagination.current_page - 1);
        }
    });

    prevLi.appendChild(prevA);
    ul.appendChild(prevLi);

    // Números de página
    for (let i = 1; i <= pagination.last_page; i++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (i === pagination.current_page ? ' active' : '');

        const a = document.createElement('a');
        a.className = 'page-link';
        a.href = '#';
        a.textContent = i;

        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (i !== pagination.current_page) {
                fetchEnlaces3(imageName, i);
            }
        });

        li.appendChild(a);
        ul.appendChild(li);
    }

    // Botón "Siguiente" (»)
    const nextLi = document.createElement('li');
    nextLi.className = 'page-item' + (pagination.current_page === pagination.last_page ? ' disabled' : '');

    const nextA = document.createElement('a');
    nextA.className = 'page-link';
    nextA.href = '#';
    nextA.innerHTML = '&gt;'; // » o usa "&gt;" si prefieres ">"

    nextA.addEventListener('click', (e) => {
        e.preventDefault();
        if (pagination.current_page < pagination.last_page) {
            fetchEnlaces3(imageName, pagination.current_page + 1);
        }
    });

    nextLi.appendChild(nextA);
    ul.appendChild(nextLi);

    // Añadir todo al contenedor
    paginationNav.appendChild(ul);
}




function actualizarVisibilidad() {
    function verificarSrc(contenedorId, prendId) {
        const contenedor = document.getElementById(contenedorId);
        const imagen = contenedor?.querySelector('img');
        const prend = document.getElementById(prendId);

        if (imagen && prend) {
            const src = imagen.getAttribute('src')?.trim();
            prend.style.display = src === '' ? 'none' : 'flex';
        }
    }

    verificarSrc('som', 'prend0');
    verificarSrc('cam', 'prend1');
    verificarSrc('pan', 'prend2');
}

function observarCambios() {
    const config = { attributes: true, attributeFilter: ['src'] };

    ['som', 'cam', 'pan'].forEach(id => {
        const img = document.querySelector(`#${id} img`);
        if (img) {
            const observer = new MutationObserver(() => {
                actualizarVisibilidad();
            });
            observer.observe(img, config);
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    actualizarVisibilidad();
    observarCambios();
});


function actualizarBtnFavoritos() {
    const modificarrr = document.querySelector('.modificarrr');
    const btnFavoritos = document.getElementById('btnFavoritos');

    if (modificarrr && btnFavoritos) {
        const estilo = window.getComputedStyle(modificarrr);
        if (estilo.display === 'none') {
            btnFavoritos.style.display = 'none';
        } else {
            btnFavoritos.style.display = '';
        }
    }
}

// Llamamos una vez al cargar
window.addEventListener('DOMContentLoaded', () => {
    actualizarBtnFavoritos();

    // Observa cambios en clases o estilo del div .modificarrr
    const modificarrr = document.querySelector('.modificarrr');
    if (modificarrr) {
        const observer = new MutationObserver(() => {
            actualizarBtnFavoritos();
        });

        observer.observe(modificarrr, {
            attributes: true,
            attributeFilter: ['class', 'style']
        });
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const btnTodos = document.getElementById("btnTodos");
    const btnFavoritos = document.getElementById("btnFavoritos");

    // Establecer color inicial
    btnTodos.style.backgroundColor = "orange";
    btnFavoritos.style.backgroundColor = "white";

    // Evento para el botón "Todos"
    btnTodos.addEventListener("click", function() {
        btnTodos.style.backgroundColor = "orange";
        btnFavoritos.style.backgroundColor = "white";
    });

    // Evento para el botón "Favoritos"
    btnFavoritos.addEventListener("click", function() {
        btnFavoritos.style.backgroundColor = "orange";
        btnTodos.style.backgroundColor = "white";
    });
});



  
 
  document.getElementById("btn1").addEventListener("click", manejarClick);
  document.getElementById("btn2").addEventListener("click", manejarClick);
  document.getElementById("tip1").addEventListener("click", manejarClick);
  document.getElementById("tip2").addEventListener("click", manejarClick);
  document.getElementById("tip3").addEventListener("click", manejarClick);
  document.getElementById("img1").addEventListener("click", manejarClick);
  document.getElementById("img2").addEventListener("click", manejarClick);
  document.getElementById("img3").addEventListener("click", manejarClick);
  document.getElementById("img4").addEventListener("click", manejarClick);
  document.getElementById("img5").addEventListener("click", manejarClick);
  document.getElementById("img6").addEventListener("click", manejarClick);
  document.getElementById("combi0").addEventListener("click", manejarClick);
  document.getElementById("combi1").addEventListener("click", manejarClick);
  document.getElementById("combi2").addEventListener("click", manejarClick);
  document.getElementById("combi3").addEventListener("click", manejarClick);
  document.getElementById("izquierda").addEventListener("click", function () {
    document.getElementById("btn1").click();
  });
  document.getElementById("derecha").addEventListener("click", function () {
    document.getElementById("btn2").click();
  });


  