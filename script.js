function abrirDetalles() {
  document.getElementById("detallesLibro").classList.remove("oculto");
}

function agregarReseña(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const comentario = document.getElementById("comentario").value;
  const estrellas = document.getElementById("estrellas").value;

  const nuevaReseña = document.createElement("li");
  nuevaReseña.innerHTML = `<strong>${nombre}</strong> (${estrellas}⭐):<br>${comentario}`;

  document.getElementById("listaReseñas").appendChild(nuevaReseña);

  document.getElementById("nombre").value = "";
  document.getElementById("comentario").value = "";
  document.getElementById("estrellas").value = "5";
}
